import { Component, HostListener, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-navbar-pc',
  imports: [],
  templateUrl: 'navbar-pc.component.html',
  styleUrls: ['./navbar-pc.component.css']

})
export class NavbarPcComponent {


  mouseX = 0;
  mouseY = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }


}
