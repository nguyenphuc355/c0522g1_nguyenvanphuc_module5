import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + product.id, product);
  }
  saveNewProduct(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, product);
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + productId);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/' + id);
  }
  // deleteProduct(id: number): Observable<Product> {
  //   return this.httpClient.delete<Product>(this.API_URL + '/' + id);
  // }

}
