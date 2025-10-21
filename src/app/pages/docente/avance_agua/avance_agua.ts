import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-avance-agua',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './avance_agua.html',
  styleUrls: ['./avance_agua.css']
})
export class AvanceAgua {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('currentUserRole');
    this.router.navigateByUrl('/');
  }
}
