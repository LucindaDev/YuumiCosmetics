import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  standalone: true,
  styleUrl: './administrador.component.scss',
  imports: [MatTableModule, MatIconModule]
})
export class AdministradorComponent {

  constructor(private productosService: ProductosService ) { }

  displayedColumns: string[] = ['id', 'nombre', 'marca', 'categoria', 'subcategoria', 'precio'];
  dataSource = [];

  ngOnInit() {
    this.productosService.getProducts().subscribe(
      (response: any) => {
        this.dataSource = response;
      },
      (error: any) => {
        console.log('success: false', error);
      }
    );

  }


}
