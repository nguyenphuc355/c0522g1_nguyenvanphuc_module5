import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KyHan} from '../model/kyHan';

@Injectable({
  providedIn: 'root'
})
export class KiHanService {

  private API_URL = 'http://localhost:3000/kiHan';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<KyHan[]> {
    return this.http.get<KyHan[]>(this.API_URL);
  }
}
