import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  imports: [],
  templateUrl: './componente-uno.html',
  styleUrl: './componente-uno.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteUno {

}
