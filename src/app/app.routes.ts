import { Routes } from '@angular/router';
import { AdminPage } from './pages/admin-page/admin-page';
import { WelcomePage } from './pages/welcome-page/welcome-page';
export const routes: Routes = [
  {
    path : "",
    component : WelcomePage
  },
  {
    path : "admin/home",
    component : AdminPage
  }
]