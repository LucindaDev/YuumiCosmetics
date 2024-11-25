import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    FormularioComponent
  ],
  imports: [FormsModule],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
