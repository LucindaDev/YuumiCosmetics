import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ProductosService } from '../../services/productos.service';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-form-subcategorias',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-subcategorias.component.html',
  styleUrl: './form-subcategorias.component.scss'
})
export class FormSubcategoriasComponent {

  @Output() subcategoriaAdded = new EventEmitter<void>();

  subcategoriaForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private subcategoriasService: ProductosService, 
    public dialogRef: MatDialogRef<FormSubcategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.subcategoriaForm = this.fb.group({
      nombre: ['']
    });

    this.subcategoriasService.getSubcategoriaId(data.id, data.nombre).subscribe(
      (subcategoria: any) => {
    this.subcategoriaForm.patchValue(subcategoria);
      },
      (error: any) => {
    console.error('Error al cargar la subcategoría', error);
      }
    );
  }

  onClick() {
    if (this.subcategoriaForm.invalid) {
      Swal.fire({
    icon: 'error',
    title: 'Formulario inválido',
    text: 'Por favor, complete todos los campos correctamente.'
      });

      return;
    }

    if (this.data.id > 0) {
      this.subcategoriasService.updateSubcategoria(this.data.id, this.subcategoriaForm.value).subscribe(
    (response: any) => {
      if (response.success) {
        Swal.fire({
      icon: 'success',
      title: 'Subcategoría actualizada',
      text: 'La subcategoría ha sido actualizada correctamente.'
        });
        this.subcategoriaForm.reset();
        this.subcategoriaAdded.emit();
      } else {
        Swal.fire({
      icon: 'error',
      title: 'Error al actualizar subcategoría',
      text: 'Hubo un problema al actualizar la subcategoría. Por favor, intente nuevamente.'
        });
      }
    },
    (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar subcategoría',
        text: 'Hubo un problema al actualizar la subcategoría. Por favor, intente nuevamente.'
      });
    }
      );
    } else {
      this.subcategoriasService.addSubcategoria(this.subcategoriaForm.value).subscribe(
    (response: any) => {
      if (response.success) {
        Swal.fire({
      icon: 'success',
      title: 'Subcategoría agregada',
      text: 'La subcategoría ha sido agregada correctamente.'
        });
        this.subcategoriaForm.reset();
        this.subcategoriaAdded.emit();
      } else {
        Swal.fire({
      icon: 'error',
      title: 'Error al agregar subcategoría',
      text: 'Hubo un problema al agregar la subcategoría. Por favor, intente nuevamente.'
        });
      }
    },
    (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al agregar subcategoría',
        text: 'Hubo un problema al agregar la subcategoría. Por favor, intente nuevamente.'
      });
    }
      );
    }
  }

}
