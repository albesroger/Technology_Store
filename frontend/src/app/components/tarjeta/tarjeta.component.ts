import { Component, input } from '@angular/core';
import { ProductItem } from '@components/model/product.interface';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.component.html',
})
export class TarjetaComponent {
  
  constructor() {}

  productArray = input<ProductItem[]>([]);

  
}
