import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KhachHang} from '../model/khachHang';

@Injectable({
  providedIn: 'root'
})
export class KhachHangService {

  private API_URL = 'http://localhost:3000/khachHang';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<KhachHang[]> {
    return this.http.get<KhachHang[]>(this.API_URL);
  }
}
