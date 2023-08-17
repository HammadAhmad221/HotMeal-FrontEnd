import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';  // Import the select function
import { getAllResturants } from '../store/resturant/resturant.selector';
import { fetchAllResturants } from '../store/resturant/resturant.action';
import { IRestaurant } from '../models/resturant.model';
import { IGetResturantRequest } from '../models/request/getResturant.request';

@Component({
  selector: 'app-restaurant',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resturants$: Observable<IRestaurant[]> = this.store.pipe(select(getAllResturants)); // Use the selector directly

  constructor(private store: Store) {}

  ngOnInit(): void {
   const request:IGetResturantRequest={
    latitude: 74.3436,
    longitude: 31.5497,
    maxOrdersPerMonth: 0,
         featured: true,
         plan: 0,
   }
   console.log(this.store.dispatch(fetchAllResturants({request:request}))); // Dispatch the action to fetch restaurants
  }
}
