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
  selector: 'app-form-productos',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.scss'
})
export class FormProductosComponent {
  @Output() productAdded = new EventEmitter<void>();

  productoForm: FormGroup;
  categorias: any[] = [];
  subcategorias: any[] = [];

  constructor(private fb: FormBuilder, 
    private productosService: ProductosService, 
    public dialogRef: MatDialogRef<FormProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productoForm = this.fb.group({
      nombre: [''],
      marca: [''],
      id_categoria: [''],
      id_subcategoria: [''],
      precio: [''],
      descripcion: ['']
    });

    console.log(data.id);

    this.loadCategorias();
    this.loadSubcategorias();
  }

  loadCategorias() {
    this.productosService.getCategorias().subscribe(
      (response: any) => {
        this.categorias = response;
      },
      (error: any) => {
        console.error('Error al cargar categorías', error);
      }
    );
  }

  loadSubcategorias() {
    this.productosService.getSubcategorias().subscribe(
      (response: any) => {
        this.subcategorias = response;
      },
      (error: any) => {
        console.error('Error al cargar subcategorías', error);
      }
    );
  }

  validateNumber(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const key = event.key;

    if (!/^\d*$/.test(value + key) && key !== 'Backspace') {
      event.preventDefault();
    }
  }


  onClick() {
    console.log(this.productoForm.value);
    if (this.productoForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'Por favor, complete todos los campos correctamente.'
      });

      return
    } 

    this.productosService.addProduct(this.productoForm.value).subscribe(
      (response: any) => {
      if (response.success) {
        Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: 'El producto ha sido agregado correctamente.'
        });
        this.productoForm.reset();
        this.productAdded.emit();
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Error al agregar producto',
        text: 'Hubo un problema al agregar el producto. Por favor, intente nuevamente.'
        });
      }
      },
      (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al agregar producto',
        text: 'Hubo un problema al agregar el producto. Por favor, intente nuevamente.'
      });
    });

    
  }

}
