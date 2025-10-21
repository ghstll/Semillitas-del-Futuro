import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-avance-reciclaje',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './avance_reciclaje.html',
    styleUrls: ['./avance_reciclaje.css']
})
export class AvanceReciclaje {
    // Mock data para la tabla de avance
    avanceData = [
        { alumno: 'Ana García', curso: '3° Básico', botellas: 15, puntos: 45, estado: 'Completado' },
        { alumno: 'Carlos Pérez', curso: '3° Básico', botellas: 12, puntos: 36, estado: 'En progreso' },
        { alumno: 'María López', curso: '3° Básico', botellas: 20, puntos: 60, estado: 'Completado' },
        // Añadir más datos según necesidad
    ];

    // Método para cerrar sesión (igual que en docente)
    logout() {
        localStorage.removeItem('currentUserRole');
        // Redirigir a la página de inicio
        window.location.href = '/';
    }
}