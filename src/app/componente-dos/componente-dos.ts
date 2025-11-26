import { Component } from '@angular/core';
import { ComunicacionService } from '../servicios/servicios';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-dos.html',
  styleUrl: './componente-dos.scss'
})
export class ComponenteDos {
  titulo;
  opciones;
  seleccion;

  constructor(
    private comunicacion: ComunicacionService,
    private router: Router
  ) {

    this.titulo = this.comunicacion.titulo;
    this.opciones = this.comunicacion.opciones;
    this.seleccion = this.comunicacion.opcionSeleccionada;
  }

  navegar(opcion: string, index: number) {

    this.comunicacion.seleccionar(opcion);

 switch (index) {
  case 0:
    this.router.navigate(['/sena']);
    break;
  case 1:
    this.router.navigate(['/ficha-474']);
    break;
  case 2:
    this.router.navigate(['/ficha-354']);
    break;
  default:

    break;
}

  }
}
