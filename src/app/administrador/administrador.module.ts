import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from '../administrador/administrador.component';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, AdministradorComponent, 
  ],
  exports: [
    AdministradorComponent
  ]
})
export class AdministradorModule { }
