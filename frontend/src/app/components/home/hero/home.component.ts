import { Component } from '@angular/core';
import { TarjetaComponent } from "@components/tarjeta/tarjeta.component";
import { ProductSectionComponent } from "@components/productSection/productSection.component";

@Component({
  selector: 'home',
  imports: [TarjetaComponent, ProductSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
