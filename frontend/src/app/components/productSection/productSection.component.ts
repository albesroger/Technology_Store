import { Component } from '@angular/core';
import { TarjetaComponent } from "@components/tarjeta/tarjeta.component";

@Component({
  selector: 'app-product-section',
  imports: [TarjetaComponent],
  templateUrl: './productSection.component.html',
})
export class ProductSectionComponent {
  equipo = {
    img: '',
    price: 0,
    name: '',
    description: '',
    rebaja: 0,
    categoria: '',
  };

  productos_Exist=[{

  }]

}
