import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComunicacionService {

  contenido = signal<string>('');

  titulo = signal('Home');
  opciones = signal<string[]>([
    'Sena presentation',
    'Ficha 3066474',
    'Ficha 3094354',
    'Cuarta opcion'
  ]);
  opcionSeleccionada = signal('');

  actualizar(titulo: string, opciones: string[]) {
    this.titulo.set(titulo);
    this.opciones.set(opciones);
  }

seleccionar(op: string) {
  this.opcionSeleccionada.set(op);


  if (op === 'Sena presentation') {
    this.contenido.set(`
       <div class="texto">
    <h2><center>SENA</center></h2>
    <p>El SENA (Servicio Naciona de Aprendizaje) es una entidad pública colombiana que se encarga de invertir en el desarrollo social y técnico de los trabajadores colombianos a través de programas de formación profesional integral. Su objetivo es aumentar la competitividad del país, generar empleo y apoyar el emprendimiento, funcionando en alianzas entre gobierno, empresarios y trabajadores.</p>
  </div>
    `);
  }

  if (op === 'Ficha 3066474') {
    this.contenido.set(`
      <h2>Ficha 3066474</h2>
      <p>Esta ficha si es real g for laif</p>
    `)
  }

  if (op === 'Ficha 3094354') {
    this.contenido.set(`
      <h2>Ficha 3094354</h2>
      <p>Esta ficha es inventada, ok?</p>
    `);
  }


}

}
