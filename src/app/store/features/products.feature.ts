import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Product } from '../../models/product';
import { pipe, switchMap, tap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { inject } from '@angular/core';

interface ProductState {
  products: Product[];
}

const initialProductState: ProductState = {
  products: [],
};

export function withProduct() {
  return signalStoreFeature(
    withState(initialProductState),
    withMethods((store) => {
      const productService = inject(ProductService);
      return {
        load: rxMethod<void>(
          pipe(
            switchMap(() =>
              productService.getProducts().pipe(
                tap((products) => {
                  patchState(store, { products });
                })
              )
            )
          )
        ),
      };
    })
  );
}
