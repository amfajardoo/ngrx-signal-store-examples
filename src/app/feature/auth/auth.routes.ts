import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login.component'),
      },
    ],
  },
];
