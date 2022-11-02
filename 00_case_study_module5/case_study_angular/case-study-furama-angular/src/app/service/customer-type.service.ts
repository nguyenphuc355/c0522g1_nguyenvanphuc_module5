import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerService} from './customer.service';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private API_URL = 'http://localhost:8080/api/customers/type';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_URL);
  }
}
