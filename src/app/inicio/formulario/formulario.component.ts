import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  constructor() { }

  inputNombre = '';
  inputNumTelefono = '';
  inputEmail = '';
  inputComentario = '';

  usuarioData = {
    nombre: '',
    numTelefono: '',
    email: '',
    comentario: '' 
  }

  onSubmit() {
    this.usuarioData = {
      nombre: this.inputNombre,
      numTelefono: this.inputNumTelefono,
      email: this.inputEmail,
      comentario: this.inputComentario
    }
    console.log('Datos del Usuario: ', this.usuarioData);
  }
}
