import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.component.html',
})
export class TarjetaComponent {
  equipo = {
    img: '',
    price: 0,
    name: '',
    description: '',
    rebaja: 0,
  };
  constructor() {}

  equipos = [
    {
      img: 'assets/microondas.webp',
      price: 70,
      name: 'Microondas',
      description: 'Microondas bueno',
      rebaja: 15,
    },
    {
      img: 'assets/tele.jpg',
      price: 120,
      name: 'Televisor',
      description: 'Televisor grande',
      rebaja: 20,
    },
    {
      img: 'assets/refri.jpg',
      price: 240,
      name: 'Refrigerador',
      description: 'Refrigerador grande',
      rebaja: 10,
    },
  ];
}
