import { Routes } from '@angular/router';
import { Actividad } from './pages/actividad/actividad';
import { AdminPage } from './pages/admin-page/admin-page';
import { Alumno } from './pages/alumno/alumno';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { AvanceAgua } from './pages/docente/avance_agua/avance_agua';
import { AvanceReciclaje } from './pages/docente/avance_reciclaje/avance_reciclaje';
import { Docente } from './pages/docente/docente';
import { TemarioAgua } from './pages/docente/temario_agua/temario_agua';
import { Login } from './pages/login/login';
export const routes: Routes = [
  {
    path: '',
    component: Bienvenida,
  },
  {
    path : 'docente',
    component : Docente
  },
  {
    path : 'docente/avance-agua',
    component : AvanceAgua
  },
  {
    path : 'docente/temario-agua',
    component : TemarioAgua
  },
  {
    path : 'docente/avance-reciclaje',
    component : AvanceReciclaje
  },
  {
    path : 'alumno',
    component : Alumno
  },
  {
    path : 'login',
    component : Login
  },
  {
    path: 'alumno/actividades',
    component: Actividad,
  },

  { path: 'admin/home', component: AdminPage },
];
