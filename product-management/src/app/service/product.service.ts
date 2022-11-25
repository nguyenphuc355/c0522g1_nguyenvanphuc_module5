import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }


  saveProduct(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + 'product/' + product.id, product);
  }

  saveNewProduct(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, product);
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + 'product/' + productId);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + 'product/' + id);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product');
  }

  findAllProductSearch(nameSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL +
      'product?name_like=' + nameSearch);
  }

  findProductSearchPaging(numberRecord: number, curPage: number,
                          nameSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product?_page=' + curPage + '&_limit=' + numberRecord +
      '&name_like=' + nameSearch);
  }

}
