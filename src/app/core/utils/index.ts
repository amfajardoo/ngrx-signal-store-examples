import {
  CreateComputedOptions,
  Injector,
  inject,
  DestroyRef,
  effect,
  untracked,
  signal,
  computed,
} from '@angular/core';
import { Observable, Subject, isObservable, switchMap } from 'rxjs';

export type ComputationResult<T> = Promise<T> | Observable<T> | T | null;

export function computedAsync<T>(
  computation: () => ComputationResult<T>,
  options?:
    | (CreateComputedOptions<void> & {
        initialValue?: T;
        injector?: Injector;
      })
    | undefined,
) {
  const destroyRef = inject(DestroyRef);

  const source$ = new Subject<Promise<T> | Observable<T>>();

  const effectRef = effect(
    () => {
      const newSource = computation();
      if (!isObservable(newSource) && !isPromise(newSource)) {
        // set the value directly
        untracked(() => sourceValue.set(newSource));
        return;
      }
      untracked(() => source$.next(newSource));
    },
    { injector: options?.injector },
  );

  const sourceValue = signal<T | null>(options?.initialValue ?? null);

  const sourceResult = source$.pipe(switchMap((s$) => s$)).subscribe({
    next: (value) => {
      sourceValue.set(value);
    },
    error: (error) => {
      sourceValue.set(options?.initialValue ?? null);
      throw error;
    },
  });

  destroyRef.onDestroy(() => {
    effectRef.destroy();
    sourceResult.unsubscribe();
  });

  return computed(() => sourceValue());
}

// helper function to check if the value is a promise
export function isPromise<T>(value: unknown): value is Promise<T> {
  return value instanceof Promise;
}
