import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-docente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './docente.html',
  styleUrls: ['./docente.css']
})
export class Docente {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('currentUserRole');
    this.router.navigateByUrl('/');
  }
}
