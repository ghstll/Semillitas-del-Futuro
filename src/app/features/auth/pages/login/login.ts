// login.ts (Lógica de Componente)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Necesitas importar Router para navegar

// Necesitarás este módulo en la configuración de tu aplicación para usar Router
// Asegúrate de que tu app.config.ts tenga 'provideRouter' configurado.

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  // Datos del formulario
  public usuario = '';
  public clave = '';
  public rolSeleccionado: 'administrador' | 'docente' | 'alumno' = 'alumno';

  // Estado de la vista: 'login' o 'registro'
  public esVistaRegistro = false;

  // Lista de usuarios simulados (almacenados en localStorage)
  private USUARIOS_KEY = 'usuarios_app';

  constructor(private router: Router) {
    // Cargar usuarios existentes al iniciar el componente
  }

  // --- Métodos de Control ---

  toggleVista() {
    this.esVistaRegistro = !this.esVistaRegistro;
    this.usuario = '';
    this.clave = '';
    this.rolSeleccionado = 'alumno';
  }

  // --- Lógica de Autenticación y Registro ---

  private obtenerUsuarios(): any[] {
    const data = localStorage.getItem(this.USUARIOS_KEY);
    return data ? JSON.parse(data) : [];
  }

  handleAccion() {
    if (this.esVistaRegistro) {
      this.registrarUsuario();
    } else {
      this.iniciarSesion();
    }
  }

  registrarUsuario() {
    if (!this.usuario || !this.clave) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const usuarios = this.obtenerUsuarios();

    // 1. Verificar si el usuario ya existe
    if (usuarios.some(u => u.usuario === this.usuario)) {
      alert('El usuario ya existe. Intenta iniciar sesión.');
      return;
    }

    // 2. Crear y guardar el nuevo usuario
    const nuevoUsuario = {
      usuario: this.usuario,
      clave: this.clave, // NOTA: En un entorno real, la clave DEBE ser hasheada.
      rol: this.rolSeleccionado
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem(this.USUARIOS_KEY, JSON.stringify(usuarios));

  alert(`Registro exitoso! Rol: ${this.rolSeleccionado}. Ahora inicia sesion.`);
    this.toggleVista(); // Cambiar a la vista de Login
  }

  iniciarSesion() {
    if (!this.usuario || !this.clave) {
      alert('Ingresa tu usuario y contraseña.');
      return;
    }

    const usuarios = this.obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(
      u => u.usuario === this.usuario && u.clave === this.clave
    );

    if (usuarioEncontrado) {
      // 1. SIMULACIÓN DE AUTH: Guardar el rol y token (o solo rol)
      localStorage.setItem('currentUserRole', usuarioEncontrado.rol);

      // 2. Redireccionar por rol
      // Asumiendo que tienes rutas configuradas como: /administrador, /docente, /alumno
      console.log('Login OK, redirigiendo a:', `/${usuarioEncontrado.rol}`);
      // Usar navigateByUrl para evitar ambigüedades con segmentos
      this.router.navigateByUrl(`/${usuarioEncontrado.rol}`).catch(err => {
        console.error('Error al navegar:', err);
        alert('No se pudo redirigir. Revisa la consola para más detalles.');
      });

    } else {
      alert('Credenciales incorrectas o usuario no registrado.');
    }
  }
}