import { Component } from '@angular/core';
import { ComunicacionService } from '../servicios/servicios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-tres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-tres.html',
  styleUrl: './componente-tres.scss'
})
export class ComponenteTres {
  contenido;

constructor(private cs: ComunicacionService) {
  this.contenido = this.cs.contenido;
}

}
