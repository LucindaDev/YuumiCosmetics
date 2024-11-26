import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  constructor() { }

  usuarioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    numTelefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comentario: new FormControl('', [Validators.maxLength(200)]),
    suscripcion: new FormControl('')
  });

  ngOnInit() {
    
  }

  onClick() {
    if (this.usuarioForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'Por favor, complete todos los campos correctamente.'
      });

      return
    } 

    Swal.fire({
      icon: 'success',
      title: 'Datos enviados',
      text: 'Sus datos han sido enviados correctamente.'
    });

    this.usuarioForm.reset();
  }
}
