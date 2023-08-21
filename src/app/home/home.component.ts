// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { getAllResturants } from '../store/resturant/resturant.selector';
// import { IGetResturantRequest } from '../models/request/getResturant.request';
// import * as ResturantActions from '../store/resturant/resturant.action';
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-restaurant',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   allRestuarants:any[]=[];
//   featuredResturants: any[] = [];
//   recommendedResturants:any[]=[];
//   isLoading: boolean = true;
//   constructor(private store: Store,private router:Router) {}
//   onSelectRestaurant(id:string){
//     this.router.navigate([id])
//   }
//   ngOnInit(): void {
//    const request:IGetResturantRequest={
//     latitude:31.470433767658765, 
//     longitude: 74.30743114496127,
//     maxOrdersPerMonth: 0,
//          featured: false,
//          plan: 0,
//    }
//   this.store.select(getAllResturants).subscribe((data) => {
//      this.isLoading=true;
//     if (data != null && data.length > 0) {
//       this.allRestuarants = data;
//       this.featuredResturants = data.filter((resturant) => resturant.featured === true);
//       this.recommendedResturants=data.filter((resturant)=>resturant.rating>=4);
//     } else {
//       this.store.dispatch(ResturantActions.fetchAllResturants({ request: request }));
//     }
//     if (
//       this.allRestuarants.length > 0 &&this.featuredResturants.length > 0 &&this.recommendedResturants.length > 0) 
//       this.isLoading = false; // Set loading to false after loading is complete
    
//   });

//   }
// }

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllResturants } from '../store/resturant/resturant.selector';
import { IGetResturantRequest } from '../models/request/getResturant.request';
import * as ResturantActions from '../store/resturant/resturant.action';
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service'; // Import the service

@Component({
  selector: 'app-restaurant',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allRestuarants:any[]=[];
  featuredResturants: any[] = [];
  recommendedResturants:any[]=[];
  isLoading: boolean = true;

  constructor(
    private store: Store,
    private router: Router,
    private geolocationService: GeolocationService // Inject the service
  ) {}

  onSelectRestaurant(id:string){
    this.router.navigate([id]);
  }

  ngOnInit(): void {
    // Use the geolocation service to get the user's location
    this.geolocationService.getCurrentLocation()
      .then(location => {
        const request: IGetResturantRequest = {
          latitude: location.latitude,
          longitude: location.longitude,
          maxOrdersPerMonth: 0,
          featured: false,
          plan: 0,
        };
        // console.log(request);
        this.store.select(getAllResturants).subscribe((data) => {
          this.isLoading = true;
          if (data != null && data.length > 0) {
            this.allRestuarants = data;
            console.log('ALL RESTURANTS',this.allRestuarants);
            this.featuredResturants = data.filter((resturant) => resturant.featured === true);
            this.recommendedResturants = data.filter((resturant) => resturant.rating >= 4);
          } else {
            this.store.dispatch(ResturantActions.fetchAllResturants({ request: request }));
          }
          if (
            this.allRestuarants.length > 0 &&
            this.featuredResturants.length > 0 &&
            this.recommendedResturants.length > 0
          ) {
            this.isLoading = false; // Set loading to false after loading is complete
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
