// navbar-mobile.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {

  /** Alterna las animaciones de las barras y muestra/oculta el menú */
  public hamburgerMenu(): void {
    document.getElementById('burger-bar1')?.classList.toggle('hamburger-animation1');
    document.getElementById('burger-bar2')?.classList.toggle('hamburger-animation2');
    document.getElementById('burger-bar3')?.classList.toggle('hamburger-animation3');
    document.getElementById('mobiletogglemenu')?.classList.toggle('show-toggle-menu');
  }

  /** Oculta el menú al clicar en un enlace */
  public hidemenubyli(): void {
    document.getElementById('mobiletogglemenu')?.classList.remove('show-toggle-menu');
    // si quieres también quitar las animaciones:
    document.getElementById('burger-bar1')?.classList.remove('hamburger-animation1');
    document.getElementById('burger-bar2')?.classList.remove('hamburger-animation2');
    document.getElementById('burger-bar3')?.classList.remove('hamburger-animation3');
  }
}


