import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IRestaurant } from './models/resturant.model';
import { IGetResturantRequest } from './models/request/getResturant.request';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

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
  addOrder(id:string){
    return this.http.post(this.baseURL+'/order/addorder',{resturantId:id});
  }
  dashboardData(){
    return this.http.get(this.baseURL+"/resturants/stats");
  }
  getAllResturants(page:number){
    return this.http.get(this.baseURL+`/resturants/allResturants?page=${page}`);
  }
  getAllOrders(page:number){
    return this.http.get(this.baseURL+`/order/allOrders?page=${page}`);
  }

}