import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fetchDataSuccess } from './data.actions'; // Import your fetchDataSuccess action

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private store: Store) {}

    baseURL: string = 'http://35.89.117.249:3000';
  getlocation() {
    return this.http.get('https://ipapi.co/json/');
  }

  getAddress(lat: number, long: number) {
    return this.http.post(this.baseURL + '/resturants/address', {
      longitude: lat,
      latitude: long
    });
  }
  // ... (rest of the code)

  getResturants(lat: number, long: number): Observable<any> {
    const url = `${this.baseURL}/resturants/getnearbyresturants`;
    const requestBody = {
      longitude: lat,
      latitude: long,
      maxOrdersPerMonth: 0,
      featured: true,
      plan: 0,
    };
  
    return this.http.post<[]>(url, requestBody).pipe(
      map((response: any) => {
        //console.log('Response:', response);
        const data = response.data; // Assuming the data is an array of RestaurantData
        this.store.dispatch(fetchDataSuccess({ data }));
        return data;
      })
    );
  }
  
}