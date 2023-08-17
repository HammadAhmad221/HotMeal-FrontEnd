import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fetchAllResturants } from 'src/app/store/resturant/resturant.action'; // Import your fetchDataSuccess action
import { IRestaurant } from './models/resturant.model';

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

  getResturants(): Observable<any> {
    return this.http.get('https://ipapi.co/json/').pipe(
      map((locationData: any) => {
        const latitude = locationData.latitude;
        const longitude = locationData.longitude;
        const url = `${this.baseURL}/resturants/getnearbyresturants`;
        const requestBody = {
          longitude: latitude,
          latitude: longitude,
          maxOrdersPerMonth: 0,
          featured: true,
          plan: 0,
        };

        return this.http.post<IRestaurant>(url, requestBody).pipe(
          map((response: any) => {
            this.store.dispatch(fetchAllResturants({payload : response }));
            return response;
          })
        );
      })
    );
  } 
}
