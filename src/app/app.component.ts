import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPcComponent } from './navbar-pc/navbar-pc.component';


@Component({
  selector: 'app-root',
  imports: [NavbarPcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio-Angular';
}
