import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ComponenteUno } from "./componente-uno/componente-uno";
import { ComponenteDos } from "./componente-dos/componente-dos";
import { ComponenteTres } from "./componente-tres/componente-tres";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteUno, ComponenteDos, ComponenteTres],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('comunicacionComponentes');
}
