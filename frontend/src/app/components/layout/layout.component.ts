import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav_bar/nav_bar.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'layout',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
