import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-pc',
  imports: [],
  templateUrl: 'navbar-pc.component.html',
})
export class NavbarPcComponent {

  mouseX = 0;
  mouseY = 0;
  mostrarCursor = true;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log('Mouse moved:', event.clientX, event.clientY);
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

}
