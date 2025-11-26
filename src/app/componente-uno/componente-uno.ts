import { Component } from '@angular/core';
import { ComunicacionService } from '../servicios/servicios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-uno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-uno.html',
  styleUrl: './componente-uno.scss'
})
export class ComponenteUno {
  constructor(private cs: ComunicacionService) {}
activeMenu = '';
  menu1() {
      this.activeMenu = 'menu1';
    this.cs.actualizar('Home', [
      'Sena presentation',
      'Ficha 3066474',
      'Ficha 3094354',
      'Cuarta opción'
    ]);
  }

  menu2() {
      this.activeMenu = 'menu2';
    this.cs.actualizar('Search', [
      'Search',
      'Sexta opcion'
    ]);
  }

  menuHTML() {
      this.activeMenu = 'menu3';
  this.cs.actualizar('HTML', [
    'HTML',
    'Octava opcion'
  ]);
}

}
