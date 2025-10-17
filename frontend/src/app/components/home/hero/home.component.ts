import { Component } from '@angular/core';
import { TarjetaComponent } from "@components/tarjeta/tarjeta.component";
import { ProductSectionComponent } from "@components/productSection/productSection.component";
import { ProductItem } from '@components/model/product.interface';

@Component({
  selector: 'home',
  imports: [TarjetaComponent, ProductSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  equipos: ProductItem[] = [
      {
        photos: 'assets/microondas.webp',
        price: 70,
        name: 'Microondas',
        description: 'Microondas bueno',
        count: 15,
        rebaja:20
      },
      {
        photos: 'assets/tele.jpg',
        price: 120,
        name: 'Televisor',
        description: 'Televisor grande',
        count: 20,
        rebaja:20
      },
      {
        photos: 'assets/refri.jpg',
        price: 240,
        name: 'Refrigerador',
        description: 'Refrigerador grande',
        count: 20,
        rebaja:20
      },
      {
        photos: 'assets/refri.jpg',
        price: 240,
        name: 'Refrigerador',
        description: 'Refrigerador grande',
        count: 20,
        rebaja:20
      },
    ];
}
