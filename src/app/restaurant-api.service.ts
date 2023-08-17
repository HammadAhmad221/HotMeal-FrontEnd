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
  // getlocation() {
  //   return this.http.get('https://ipapi.co/json/');
  // }

  getAddress(lat: number, long: number) {
    return this.http.post(this.baseURL + '/resturants/address', {
      longitude: lat,
      latitude: long
    });
  }
  // ... (rest of the code)

  // getResturants(): Observable<any> {
  //   return this.http.get('https://ipapi.co/json/').pipe(
  //     map((locationData: any) => {
  //       const latitude = locationData.latitude;
  //       const longitude = locationData.longitude;
  //       const url = `${this.baseURL}/resturants/getnearbyresturants`;
  //       const requestBody = {
  //         longitude: latitude,
  //         latitude: longitude,
  //         maxOrdersPerMonth: 0,
  //         featured: true,
  //         plan: 0,
  //       };
  //       const request={
  //         latitude: 31.5497,
  //         longitude: 74.3436
  //        }
  //       return this.http.post<IRestaurant>(url, requestBody).pipe(
  //         map((response: any) => {
            
  //            this.store.dispatch(fetchAllResturants({request:request}));
  //           return response;
  //         })
  //       );
  //     })
  //   );
  // } 
  // getResturants(): Observable<IRestaurant[]> {
  //   const latitude = 73.0479 ; // Replace with the desired latitude
  //   const longitude = 33.6844; // Replace with the desired longitude
  // console.log('resturant-api');
  //   const url = `${this.baseURL}/resturants/getnearbyresturants`;
  //   const requestBody = {
  //     longitude: latitude,
  //     latitude: longitude,
  //     maxOrdersPerMonth: 0,
  //     featured: true,
  //     plan: 0,
  //   };
  
  //   return this.http.post<IRestaurant[]>(url, requestBody).pipe(
  //     map((response: any) => {
  //       this.store.dispatch(fetchAllResturants({ request: requestBody }));
  //       console.log(response);
  //       return response;
  //     })
  //   );
  // }
  getResturants(request: IGetResturantRequest): Observable<IRestaurant[]> {
    const url = `${this.baseURL}/resturants/getnearbyresturants`;
    return this.http.post<IRestaurant[]>(url, request);
}
}