import { Component, inject } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormProductosComponent } from './form-productos/form-productos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  standalone: true,
  styleUrl: './administrador.component.scss',
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatDialogModule]
})
export class AdministradorComponent {

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

  ngOnInit() {
    this.getProductos();
  }

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


}
