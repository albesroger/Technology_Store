import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/hero/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from '@components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
