import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    {
        path: '', component: InicioComponent
    },
    {
        path: 'productos', component: ProductosComponent
    }
];
