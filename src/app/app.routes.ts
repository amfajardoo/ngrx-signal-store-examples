import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/products.routes'),
  },
  {
    path: 'todo',
    loadChildren: () => import('./feature/todos/todos.routes'),
  },
];
