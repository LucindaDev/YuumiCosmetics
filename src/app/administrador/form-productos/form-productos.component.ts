import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-form-productos',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.scss'
})
export class FormProductosComponent {

  nombre: string = '';
  marca: string = '';
  categoria: string = '';
  subcategoria: string = '';
  precio: number = 0;

  constructor() {}

  onSubmit() {

    console.log('Producto agregado:', {
      nombre: this.nombre,
      marca: this.marca,
      categoria: this.categoria,
      subcategoria: this.subcategoria,
      precio: this.precio
    });
  }


}
