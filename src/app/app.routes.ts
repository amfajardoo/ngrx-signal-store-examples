import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/products.routes'),
  },
  {
    path: 'todo',
    loadChildren: () => import('./feature/todos/todos.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
