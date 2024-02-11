import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component'),
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./pages/todos/todos.component').then((c) => c.TodosComponent),
  },
];
