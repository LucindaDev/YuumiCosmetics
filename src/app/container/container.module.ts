import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { InicioModule } from '../inicio/inicio.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    ContainerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, InicioModule, SweetAlert2Module, MainComponent,HeaderComponent
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
