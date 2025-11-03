import { Component } from '@angular/core';
import { ManagementLayout } from '../../../../layouts/management-layout/management-layout';

@Component({
  selector: 'app-admin-home',
  imports: [ManagementLayout],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css'
})
export class AdminHome {
  currentUser : string = "Administrador"
}
