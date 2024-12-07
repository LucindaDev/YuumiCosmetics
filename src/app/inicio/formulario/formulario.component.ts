import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  constructor(private formService: FormService) { }

  usuarioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    numero: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]),
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

    this.formService.sendForm(this.usuarioForm.value).subscribe(
      (response: any) => {
      if (response.success) {
        Swal.fire({
        icon: 'success',
        title: 'Datos enviados',
        text: 'Sus datos han sido enviados correctamente.'
        });
        this.usuarioForm.reset();
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Error en el envío',
        text: 'Hubo un problema al enviar los datos. Por favor, intente nuevamente.'
        });
      }
      },
      (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error en el envío',
        text: 'Hubo un problema al enviar los datos. Por favor, intente nuevamente.'
      });
      }
    );

  }
}
