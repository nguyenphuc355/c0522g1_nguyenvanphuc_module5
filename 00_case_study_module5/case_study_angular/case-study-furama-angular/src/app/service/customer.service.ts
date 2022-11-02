import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {SearchResult} from '../model/SearchResult';
import {environment} from '../../environments/environment';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL + '/add', customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(environment.api_url + 'customers/edit/' + id, customer);
  }

  findById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/' + customerId);
  }


  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(environment.api_url + '/customers/delete/' + id);
  }

  paginate(page: number, limit: number): Observable<SearchResult<Customer>> {
    const API_URL = environment.api_url + '/customers' + '?page=' + (page - 1) + '&size=' + limit;
    console.log(API_URL);
    return this.http.get<SearchResult<Customer>>(API_URL);
  }

}
