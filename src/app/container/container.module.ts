import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { InicioModule } from '../inicio/inicio.module';




@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,    

  ],
  imports: [
    CommonModule, InicioModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
