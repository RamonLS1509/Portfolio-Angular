import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-navbar-pc',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'navbar-pc.component.html'
})
export class NavbarPcComponent {

  navbarItem = signal(['Home', 'Skills', 'About me'])




}
