import { Routes } from '@angular/router';
import { ComponenteTres } from './componente-tres/componente-tres';

export const routes: Routes = [
  { path: '', redirectTo: 'sena', pathMatch: 'full' },


  { path: 'sena', component: ComponenteTres },
  { path: 'ficha-474', component: ComponenteTres },
  { path: 'ficha-354', component: ComponenteTres },

  // por si una opción no tiene ruta
  { path: '**', redirectTo: 'sena' }
];
