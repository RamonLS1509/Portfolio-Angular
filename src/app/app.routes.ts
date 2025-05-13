import { Routes } from '@angular/router';
import { NavbarPcComponent } from './navbar-pc/navbar-pc.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

{
  path: '**',
  component: AppComponent
}


];
