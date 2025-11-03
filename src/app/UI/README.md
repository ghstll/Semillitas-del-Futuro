
# Carpeta UI 📁

La carpeta UI contiene componentes visuales reutilizables diseñados para mantener consistencia, escalabilidad y facilidad de uso en toda la aplicación Angular.
Todos los componentes son independientes, personalizables mediante @Input() y @Output(), y deben poder integrarse en cualquier parte de la app.


## Componentes disponibles

-


## ¿Como agregar un nuevo componente a la carpeta 📝?

Si quieres agregar un nuevo componente reutilizable a esta carpeta : 

### 1.- Crear los archivos del componente dentro de la carpeta UI 
`src/app/ui/nombre-del-componente/
`

`ng g c nombre-componente`

El nombre del componente debe ser generico y descriptivo sin indicar donde sera utilizado

## 2.- Diseño y funcionalidad
* Debe ser independiente, sin depender de un componente especifico.
* Usar @Input() para personalziar su aparienca en contenido.
* Usar @Output() para eventos que el padre pueda escuchar.
* Evitar logica de negocio dentro del componente; solo debe manejar UI y presentacion.

## 3.- Agregarlo al modulo UI (ui.module.ts)




```
@NgModule({
  declarations: [
    AppButtonComponent,
    AppCardComponent,
    AppModalComponent,
    NuevoComponenteComponent
  ],
  exports: [
    AppButtonComponent,
    AppCardComponent,
    AppModalComponent,
    NuevoComponenteComponent
  ],
  imports: [CommonModule]
})
export class UiModule {}
```

## 5.- Documentar el componente

* Descripcion breve de que hace.

* Inputs y outputs disponibles.

## 6.- Estilos

* Mantener consistencia visual con los demas componentes UI.

