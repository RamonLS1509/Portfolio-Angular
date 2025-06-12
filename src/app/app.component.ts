// src/app/app.component.ts
import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NavbarPcComponent }    from './navbar-pc/navbar-pc.component';
import { NavbarMobileComponent }from './navbar-mobile/navbar-mobile.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css'],
  imports: [
    NavbarPcComponent,
    NavbarMobileComponent,
  ]
})
export class AppComponent {
  title = 'Portfolio-Angular';
}
