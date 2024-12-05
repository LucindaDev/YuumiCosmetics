import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.scss'
})
export class ProductosComponent {

    constructor(private productosService: ProductosService ) { }

    productos: any = [];

    ngOnInit() {
        this.productosService.getProducts().subscribe(
            (response: any) => {
                this.productos = response;
            },
            (error: any) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al obtener los productos',
                });
                
                console.log('success: false', error);
            }
        );
    }


}
