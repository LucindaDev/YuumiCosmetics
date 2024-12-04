import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProducts(productos: any) {
    return this.http.get('http://localhost:8080/productos', productos);
  }

}
