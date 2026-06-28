import { Routes } from '@angular/router';
import { Home } from './component/home/home';

export const routes: Routes = [
  // 1. The Default Route: What loads when someone visits yoursite.com
  {
    path: '',
    component: Home,
    title: 'Home | Youssef Ghobrial',
  },
  //   // 2. The Specific Path: If someone types yoursite.com/home, it redirects to the clean default URL
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  //   // 3. The Wildcard Route: Catches typos (e.g., yoursite.com/asdf) and safely sends them back to Home
  {
    path: '**',
    redirectTo: '',
  },
];
