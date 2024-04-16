import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./todos/todos.component').then((m) => m.TodosComponent),
      },
    ],
  },
];
