import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SearchResult} from '../model/SearchResult';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) {
  }

  paginate(name: number, size: number): Observable<SearchResult<Employee>> {
    const API_URL = this.API_URL + '?name=' + name + '&size=' + size;
    console.log(API_URL);
    return this.http.get<SearchResult<Employee>>(API_URL);
  }

  // paginate(page: number, limit: number): Observable<SearchResult<Employee>> {
  //   const API_URL = environment.api_url + '/employees' + '?page=' + (page - 1) + '&size=' + limit;
  //   console.log(API_URL);
  //   return this.http.get<SearchResult<Employee>>(API_URL);
  // }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Customer>(environment.api_url + '/employees/delete/' + id);
  }
}
