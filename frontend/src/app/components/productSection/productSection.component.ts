import { Component } from '@angular/core';
import { ProductItem } from '@components/model/product.interface';
import { TarjetaComponent } from "@components/tarjeta/tarjeta.component";

@Component({
  selector: 'app-product-section',
  imports: [TarjetaComponent],
  templateUrl: './productSection.component.html',
})
export class ProductSectionComponent {
  equipos: ProductItem[] = [
    {
      photos: 'assets/microondas.webp',
      price: 70,
      name: 'Microondas',
      description: 'Microondas bueno',
      count: 15,
      rebaja:0
    },
    {
      photos: 'assets/tele.jpg',
      price: 120,
      name: 'Televisor',
      description: 'Televisor grande',
      count: 20,
      rebaja:0
    },
    {
      photos: 'assets/refri.jpg',
      price: 240,
      name: 'Refrigerador',
      description: 'Refrigerador grande',
      count: 20,
      rebaja:0
    },
    {
      photos: 'assets/refri.jpg',
      price: 240,
      name: 'Refrigerador',
      description: 'Refrigerador grande',
      count: 20,
      rebaja:0
    },
  ];

}
