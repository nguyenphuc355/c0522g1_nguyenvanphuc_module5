import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  updateCustomer(customer: Customer): Observable<void> {
    return this.http.patch<void>(this.API_URL + '/' + customer.id, customer);
  }

  findById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/' + customerId);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URL + '/' + id);
  }
}
