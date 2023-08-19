import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllResturants } from '../store/resturant/resturant.selector';
// import { fetchAllResturants } from '../store/resturant/resturant.action';
import { IGetResturantRequest } from '../models/request/getResturant.request';
import * as ResturantActions from '../store/resturant/resturant.action';
import { Router } from '@angular/router';



@Component({
  selector: 'app-restaurant',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allRestuarants:any[]=[];
  featuredResturants: any[] = [];
  recommendedResturants:any[]=[];
  isLoading: boolean = false;
  constructor(private store: Store,private router:Router) {}
  onSelectRestaurant(id:string){
    this.router.navigate([id])
  }
  ngOnInit(): void {
   const request:IGetResturantRequest={
    latitude:31.470433767658765, 
    longitude: 74.30743114496127,
    maxOrdersPerMonth: 0,
         featured: false,
         plan: 0,
   }

   this.isLoading = true;

  this.store.select(getAllResturants).subscribe((data) => {
     this.isLoading=true;
    if (data != null && data.length > 0) {
      // this.isLoading=true;
      this.allRestuarants = data;
      this.featuredResturants = data.filter((resturant) => resturant.featured === true);
      this.recommendedResturants=data.filter((resturant)=>resturant.rating>=4);
      // this.isLoading=false;
    } else {
      // this.isLoading=true;
      this.store.dispatch(ResturantActions.fetchAllResturants({ request: request }));
      // this.isLoading=false;
    }
     this.isLoading = false;
  });

  }
}
