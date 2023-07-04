import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL: string = 'http://35.89.117.249:3000';
  constructor(private http: HttpClient) {}
  getlocation() {
    return this.http.get('https://ipapi.co/json/');
  }

  getAddress(lat: number, long: number) {
    return this.http.post(this.baseURL + '/resturants/address', {
      longitude: lat,
      latitude: long,
      maxOrdersPerMonth: 0,
      featured: true,
      plan: 0,
    });
  }
}
