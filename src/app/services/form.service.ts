import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient ) {}

  sendForm(data: any) {
    return this.http.post('http://localhost:8080/form', data);
  }
  
}
