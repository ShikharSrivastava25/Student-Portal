import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Students } from './components/students/students';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'students', component: Students },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];
