import { Component, Output, EventEmitter } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ProductosService } from '../../services/productos.service';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-form-categorias',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-categorias.component.html',
  styleUrl: './form-categorias.component.scss'
})
export class FormCategoriasComponent {

  categoriaForm: FormGroup;

  constructor(private fb: FormBuilder, 
        private categoriasService: ProductosService, 
        public dialogRef: MatDialogRef<FormCategoriasComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    this.categoriaForm = this.fb.group({
    nombre: ['']
    });

    if (data.id) {
    this.categoriasService.getCategoriaId(data.id).subscribe(
      (categoria: any) => {
      this.categoriaForm.patchValue(data.nombre);
      },
      (error: any) => {
      console.error('Error al cargar la categoría', error);
      }
    );
    }
  }

  onClick() {
    if (this.categoriaForm.invalid) {
    Swal.fire({
      icon: 'error',
      title: 'Formulario inválido',
      text: 'Por favor, complete todos los campos correctamente.'
    });
    return;
    }

    if (this.data.id) {
    this.categoriasService.updateCategoria(this.data.id, this.categoriaForm.value).subscribe(
      (response: any) => {
      if (response.success) {
        Swal.fire({
        icon: 'success',
        title: 'Categoría actualizada',
        text: 'La categoría ha sido actualizada correctamente.'
        });
        this.categoriaForm.reset();
        this.dialogRef.close(true);
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Error al actualizar categoría',
        text: 'Hubo un problema al actualizar la categoría. Por favor, intente nuevamente.'
        });
      }
      },
      (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar categoría',
        text: 'Hubo un problema al actualizar la categoría. Por favor, intente nuevamente.'
      });
      }
    );
    } else {
    this.categoriasService.addCategoria(this.categoriaForm.value).subscribe(
      (response: any) => {
      if (response.success) {
        Swal.fire({
        icon: 'success',
        title: 'Categoría agregada',
        text: 'La categoría ha sido agregada correctamente.'
        });
        this.categoriaForm.reset();
        this.dialogRef.close(true);
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Error al agregar categoría',
        text: 'Hubo un problema al agregar la categoría. Por favor, intente nuevamente.'
        });
      }
      },
      (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al agregar categoría',
        text: 'Hubo un problema al agregar la categoría. Por favor, intente nuevamente.'
      });
      }
    );
    }
  }

}
