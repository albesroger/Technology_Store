import { Component } from '@angular/core';
import { NavBarComponent } from '@components/home/nav_bar/nav_bar.component';

@Component({
  selector: 'home',
  imports: [NavBarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
