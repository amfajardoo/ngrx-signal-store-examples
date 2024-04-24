import { computed } from '@angular/core';
import {
  signalStore,
  withMethods,
  patchState,
  withHooks,
  type,
  withState,
  withComputed,
} from '@ngrx/signals';
import { withEntities, setAllEntities } from '@ngrx/signals/entities';
// import { withLogger } from './features/logger.feature';

export interface Todo {
  // By default id is the main key for getting any element
  _id: string; // Different id key
  name: string;
  finished: boolean;
}

interface TodoState {
  selectedTodoId: string | null;
}

const initialState: TodoState = {
  selectedTodoId: null,
};

export const TodoStore = signalStore(
  withEntities({ entity: type<Todo>(), collection: 'todo' }),
  withState(initialState),
  // withLogger('todos'),
  withMethods((store) => {
    //   const todoService = inject(TodoService);

    return {
      load() {
        const todos: Todo[] = [
          {
            _id: '54A2FASE4C5A',
            finished: false,
            name: 'Task 1',
          },
        ];
        patchState(
          store,
          setAllEntities(todos, { collection: 'todo', idKey: '_id' }), // idKey is required only if 'id' is not the primary key
        );
      },
      // async add(name: string) {
      //   const todo = await todoService.add(name);
      //   patchState(store, addEntity(todo));
      // },

      // async remove(id: number) {
      //   await todoService.remove(id);
      //   patchState(store, removeEntity(id));
      // },

      // async setFinished(id: number) {
      //   await todoService.setFinished(id);
      //   patchState(store, updateEntity({ id, changes: { finished: true } }));
      // },
      // async setUnfinished(id: number) {
      //   await todoService.setUnfinished(id);
      //   patchState(store, updateEntity({ id, changes: { finished: false } }));
      // },
    };
  }),
  withComputed((store) => {
    return {
      selectedTodo: computed(() => {
        return store
          .todoEntities()
          .find((todo) => todo._id === store.selectedTodoId());
      }),
    };
  }),
  withHooks({ onInit: (store) => store.load() }),
);
