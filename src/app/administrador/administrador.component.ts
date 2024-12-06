import { Component, inject } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormProductosComponent } from './form-productos/form-productos.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  standalone: true,
  styleUrl: './administrador.component.scss',
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatDialogModule]
})
export class AdministradorComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(FormProductosComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private productosService: ProductosService ) { }

  displayedColumns: string[] = ['id', 'nombre', 'marca', 'categoria', 'subcategoria', 'precio', 'acciones'];
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
