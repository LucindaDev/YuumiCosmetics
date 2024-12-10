import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:8080/productos');
  }

  addProduct(product: any) {
    return this.http.post('http://localhost:8080/productos', product);
  }

  getCategorias() {
    return this.http.get('http://localhost:8080/categorias');
  }

  getSubcategorias() {
    return this.http.get('http://localhost:8080/subcategorias');
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:8080/productos/${id}`);
  }

  getProductoId(id: number) {
    return this.http.get(`http://localhost:8080/productos/${id}`);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`http://localhost:8080/productos/${id}`, product);
  }

}
