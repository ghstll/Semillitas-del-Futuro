import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-temario-agua',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './temario_agua.html',
  styleUrls: ['./temario_agua.css']
})
export class TemarioAgua {
  temario = [
    { titulo: 'Introducción al Ciclo del Agua', duracion: '30 min' },
    { titulo: 'Importancia del Agua en la Vida', duracion: '45 min' },
    { titulo: 'Contaminación y Conservación', duracion: '40 min' },
    { titulo: 'Actividades Prácticas', duracion: '60 min' }
  ];

  constructor() {}
}
