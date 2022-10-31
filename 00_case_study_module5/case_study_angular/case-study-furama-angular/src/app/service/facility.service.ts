import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {FacilityType} from '../model/facility-type';
import {Customer} from '../model/customer';
import {RenType} from '../model/ren-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL + 'facility');
  }

  findAllFacilitySearch(nameSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'facility?name_like=' + nameSearch);
  }

  findFacilitySearchPaging(numberRecord: number, curPage: number, nameSearch: string): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL + 'facility?_page=' + curPage + '&_limit=' + numberRecord +
      '&name_like=' + nameSearch);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(this.API_URL + 'facility/' + id);
  }

  findAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.API_URL + 'facilityType');
  }

  findAllRentType(): Observable<RenType[]> {
    return this.httpClient.get<RenType[]>(this.API_URL + 'RentType');
  }

  addFacility(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.API_URL + 'facility', facility);
  }

  getById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.API_URL + 'facility/' + id);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.API_URL + 'facility/' + id, facility);
  }
}
