import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-componente-dos',
  imports: [RouterLink],
  templateUrl: './componente-dos.html',
  styleUrl: './componente-dos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteDos {

}
