import { Component } from '@angular/core';
import { TarjetaComponent } from "@components/tarjeta/tarjeta.component";

@Component({
  selector: 'home',
  imports: [TarjetaComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
