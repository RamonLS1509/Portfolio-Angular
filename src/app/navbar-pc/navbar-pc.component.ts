import { Component, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'app-navbar-pc',
  imports: [],
  templateUrl: 'navbar-pc.component.html',
})
export class NavbarPcComponent {

  mouseX = 0;
  mouseY = 0;

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
  }

}
