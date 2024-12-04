import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.scss'
})
export class ProductosComponent {

    constructor(productosService: ProductosService ) { }

    

    productos: any = [
        {
            "nombre": "Base de Maquillaje Líquida",
            "marca": "Maybelline",
            "precio": 1000,
            "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci corrupti, vitae fugit facilis cumque voluptate quos tempore."
        },
        {
            "nombre": "Brochas de Maquillaje",
            "marca": "Real Techniques",
            "precio": 240,
            "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci corrupti, vitae fugit facilis cumque voluptate quos tempore."
        },
        {
            "nombre": "Crema Hidratante",
            "marca": "Nivea",
            "precio": 420,
            "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci corrupti, vitae fugit facilis cumque voluptate quos tempore."
        },
        {
            "nombre": "Gel Limpiador Facial",
            "marca": "La Roche-Posay",
            "precio": 250,
            "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci corrupti, vitae fugit facilis cumque voluptate quos tempore."
        },
        {
            "nombre": "Labial Mate",
            "marca": "MAC",
            "precio": 350,
            "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci corrupti, vitae fugit facilis cumque voluptate quos tempore."
        },
        {
            "nombre": "Perfume Floral",
            "marca": "Chanel",
            "precio": 200,
            "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus adipisci corrupti, vitae fugit facilis cumque voluptate quos tempore."
        }
    ];

}
