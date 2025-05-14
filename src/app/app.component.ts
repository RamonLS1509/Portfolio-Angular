import { Component } from '@angular/core';
import { NavbarPcComponent } from './navbar-pc/navbar-pc.component';
import { NavbarMobileComponent } from "./navbar-mobile/navbar-mobile.component";


@Component({
  selector: 'app-root',
  imports: [NavbarPcComponent, NavbarMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio-Angular';
}
