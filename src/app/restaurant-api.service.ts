import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { fetchAllResturants } from 'src/app/store/resturant/resturant.action'; // Import your fetchDataSuccess action
import { IRestaurant } from './models/resturant.model';
import { IGetResturantRequest } from './models/request/getResturant.request';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private store: Store) {}

    baseURL: string = 'http://35.89.117.249:3000';

  getAddress(lat: number, long: number) {
    return this.http.post(this.baseURL + '/resturants/address', {
      longitude: lat,
      latitude: long
    });
  }
  getResturants(request: IGetResturantRequest): Observable<IRestaurant[]> {
    const url = `${this.baseURL}/resturants/getnearbyresturants`;
    return this.http.post<IRestaurant[]>(url, request);
}
}