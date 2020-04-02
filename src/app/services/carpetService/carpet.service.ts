import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarpetService {

  private baseUrl = 'http://localhost:8081/wssAngularProject/carpetas/carpets';

  constructor(private http: HttpClient) { }

  getCarpet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCarpet(carpet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, carpet);
  }

  updateCarpet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCarpet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCarpetList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
