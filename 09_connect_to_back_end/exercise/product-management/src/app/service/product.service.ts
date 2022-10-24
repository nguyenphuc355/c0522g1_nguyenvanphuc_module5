import {Injectable} from '@angular/core';
import {IProduct} from '../model/IProduct';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.API_URL);
  }

  saveProduct(product: IProduct): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + product.id, product);
  }
  saveNewProduct(product: IProduct): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, product);
  }

  findById(productId: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.API_URL + '/' + productId);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(this.API_URL + '/' + id);
  }
}
