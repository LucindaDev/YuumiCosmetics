import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InicioComponent,
    FormularioComponent
  ],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
