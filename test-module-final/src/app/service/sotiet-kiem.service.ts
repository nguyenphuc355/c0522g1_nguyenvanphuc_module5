import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SoTietKiem} from '../model/soTietKiem';

@Injectable({
  providedIn: 'root'
})
export class SotietKiemService {


  private API_URL = 'http://localhost:3000/soTietKiem';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<SoTietKiem[]> {
    return this.httpClient.get<SoTietKiem[]>(this.API_URL);
  }

  saveProduct(sotietKiem: SoTietKiem): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + sotietKiem.id, sotietKiem);
  }

  saveNewProduct(sotietKiem: SoTietKiem): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, sotietKiem);
  }

  findById(productId: number): Observable<SoTietKiem> {
    return this.httpClient.get<SoTietKiem>(this.API_URL + '/' + productId);
  }

  deleteCustomer(maSoSo: number): Observable<SoTietKiem> {
    return this.httpClient.delete<SoTietKiem>(this.API_URL + '/' + maSoSo);
  }
}
