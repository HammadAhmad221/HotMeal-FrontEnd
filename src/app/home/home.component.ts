import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllResturants } from '../store/resturant/resturant.selector';
import { fetchAllResturants } from '../store/resturant/resturant.action';
import { IGetResturantRequest } from '../models/request/getResturant.request';
import * as ResturantActions from '../store/resturant/resturant.action';


@Component({
  selector: 'app-restaurant',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allRestuarants:any[]=[];
  constructor(private store: Store) {}

  ngOnInit(): void {
   const request:IGetResturantRequest={
    latitude:31.5497,
    longitude: 74.3436,
    maxOrdersPerMonth: 0,
         featured: true,
         plan: 0,
   }


  this.store.select(getAllResturants).subscribe((data) => {
    if (data != null && data.length > 0) {
      this.allRestuarants = data;
      console.log('from component',this.allRestuarants);
    } else {
      //console.log('else part of component');
      this.store.dispatch(ResturantActions.fetchAllResturants({ request: request }));
    }
  });

  }
}
