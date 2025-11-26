import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteUno } from './componente-uno/componente-uno';
import { ComponenteDos } from './componente-dos/componente-dos';
import { ComunicacionService } from './servicios/servicios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteUno, ComponenteDos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private cs: ComunicacionService) {
    this.cs.actualizar('Home', [
      'Sena presentation',
      'Ficha 3066474',
      'Ficha 3333333',
      'Cuarta opcion'
    ]);
  }
}
