import { Component, inject } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormProductosComponent } from './form-productos/form-productos.component';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  standalone: true,
  styleUrl: './administrador.component.scss',
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatDialogModule, NgIf]
})
export class AdministradorComponent {

  selectedTable: string = 'productos';

  readonly dialog = inject(MatDialog);

  openDialog(id: number) {
    const dialogRef = this.dialog.open(FormProductosComponent, {
      data: { id: id }
    });

    console.log(id);

    dialogRef.componentInstance.productAdded.subscribe(() => {
      this.getProductos();
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private productosService: ProductosService) { }

  displayedColumns: string[] = ['id', 'nombre', 'marca', 'categoria', 'subcategoria', 'precio', 'acciones'];
  dataSource = [];
  displayedColumnsCategorias: string[] = ['id', 'nombre', 'acciones'];
  dataSourceCat = [];
  displayedColumnsSubcategorias: string[] = ['id', 'nombre', 'categoria', 'acciones'];
  dataSourceSubcat = [];

  ngOnInit() {
    this.getProductos();
    this.getCategorias();
    this.getSubcategorias();
  }

  selectTable(tabla: string) {
    this.selectedTable = tabla;
    if (tabla === 'productos') {
      this.getProductos();
    } else if (tabla === 'categorias') {
      this.getCategorias();
    } else {
      this.getSubcategorias();
    }
  }


  // FUNCIONES PARA OBTENER PRODUCTOS, CATEGORIAS Y SUBCATEGORIAS.

  getProductos() {
    this.productosService.getProducts().subscribe(
      (response: any) => {
        this.dataSource = response;
      },
      (error: any) => {
        console.log('success: false', error);
      }
    );
  }

  getCategorias() {
    this.productosService.getCategorias().subscribe(
      (response: any) => {
        this.dataSourceCat = response;
      },
      (error: any) => {
        console.log('success: false', error);
      }
    );
  }

  getSubcategorias() {
    this.productosService.getSubcategorias().subscribe(
      (response: any) => {
        this.dataSourceSubcat = response;
      },
      (error: any) => {
        console.log('success: false', error);
      }
    );
  }

  // FUNCIONES PARA ELIMINAR PRODUCTOS, CATEGORIAS Y SUBCATEGORIAS.

  eliminarProducto(id: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteProduct(id).subscribe(
          (response: any) => {
            if (response.success) {
              Swal.fire({
                icon: 'success',
                title: 'Producto eliminado',
                text: 'El producto ha sido eliminado correctamente.'
              });
              this.getProductos();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error al eliminar producto',
                text: 'Hubo un problema al eliminar el producto. Por favor, intente nuevamente.'
              });
            }
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error al eliminar producto',
              text: 'Hubo un problema al eliminar el producto. Por favor, intente nuevamente.'
            });
          }
        );
      }
    });
  }

  eliminarCategoria(id: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteCategoria(id).subscribe(
          (response: any) => {
            if (response.success) {
              Swal.fire({
                icon: 'success',
                title: 'Categoría eliminada',
                text: 'La categoría ha sido eliminada correctamente.'
              });
              this.getCategorias();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error al eliminar categoría',
                text: 'Hubo un problema al eliminar la categoría. Por favor, intente nuevamente.'
              });
            }
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error al eliminar categoría',
              text: 'Hubo un problema al eliminar la categoría. Por favor, intente nuevamente.'
            });
          }
        );
      }
    });
  }

  eliminarSubcategoria(id: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteSubcategoria(id).subscribe(
          (response: any) => {
            if (response.success) {
              Swal.fire({
                icon: 'success',
                title: 'Subcategoría eliminada',
                text: 'La subcategoría ha sido eliminada correctamente.'
              });
              this.getSubcategorias();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error al eliminar subcategoría',
                text: 'Hubo un problema al eliminar la subcategoría. Por favor, intente nuevamente.'
              });
            }
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error al eliminar subcategoría',
              text: 'Hubo un problema al eliminar la subcategoría. Por favor, intente nuevamente.'
            });
          }
        );
      }
    });
  }

}
