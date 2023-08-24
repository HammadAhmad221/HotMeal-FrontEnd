// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { getRestaurantById } from '../store/resturant/resturant.selector';
// import { Subscription, interval } from 'rxjs';

// @Component({
//   selector: 'app-restaurant-page',
//   templateUrl: './restaurant-page.component.html',
//   styleUrls: ['./restaurant-page.component.scss'],
// })
// export class RestaurantPageComponent implements OnInit, OnDestroy {
//   restaurantId: string | null = null;
//   resturantInfo: any = [];
//   currentImageIndex = 0;
//   imageSubscription: Subscription | undefined;
//   imageInterval = 3000; 

//   constructor(private route: ActivatedRoute, private store: Store) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       const idFromParams = params.get('restaurantId');
//       if (idFromParams !== null) {
//         this.restaurantId = idFromParams;
//         this.store.select(getRestaurantById(this.restaurantId)).subscribe((details) => {
//           console.log('Details:', details);
//           this.resturantInfo = details;
//           this.startImageInterval();
//         });
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.imageSubscription) {
//       this.imageSubscription.unsubscribe();
//     }
//   }

//   startImageInterval(): void {
//     this.imageSubscription = interval(this.imageInterval).subscribe(() => {
//       this.nextImage();
//     });
//   }

//   nextImage(): void {
//     this.currentImageIndex = (this.currentImageIndex + 1) % this.resturantInfo.photos.length;
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllResturants, getRestaurantById } from '../store/resturant/resturant.selector';
import { GeolocationService } from '../geolocation.service'; // Import the service
import { Subscription, interval } from 'rxjs';
import { IGetResturantRequest } from '../models/request/getResturant.request';
import * as ResturantActions from '../store/resturant/resturant.action';
import { HttpService } from '../restaurant-api.service';


@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit, OnDestroy {
  allRestuarants:any[]=[];
  resturantId: string ='';
  resturantInfo: any = [];
  currentImageIndex = 0;
  imageSubscription: Subscription | undefined;
  imageInterval = 2500;
  isLoading: boolean = true;
  orderPlaced:boolean=false;


  constructor(
    private geolocationService: GeolocationService, // Inject the service
    private route: ActivatedRoute,
    private store: Store,
  public httpService:HttpService

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idFromParams = params.get('restaurantId');
      if (idFromParams !== null) {
        this.resturantId = idFromParams;
        this.store.select(getRestaurantById(this.resturantId)).subscribe((details) => {
          this.resturantInfo = details;
          // console.log('Info',this.resturantInfo);
          if(this.resturantInfo!=undefined && this.resturantInfo!=null){
            this.isLoading=false;
            // console.log('Loading',this.isLoading);
          }

        });
        this.startImageInterval();
        this.fetchNearbyRestaurants();
      }
    });
    
  }

  ngOnDestroy(): void {
    if (this.imageSubscription) {
      this.imageSubscription.unsubscribe();
    }
  }

  fetchNearbyRestaurants(): void {
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
          if (data != null && data.length > 0) {
            this.allRestuarants = data;
             console.log('RESTURANT PAGE GETTING RESTURANTS',this.allRestuarants);
          } 
          else {
            this.store.dispatch(ResturantActions.fetchAllResturants({ request: request }));
          }
      })
      }) 
      .catch(error => {
        console.log(error);
      }); 
  }

  startImageInterval(): void {
    this.imageSubscription = interval(this.imageInterval).subscribe(() => {
      this.nextImage();
    });
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.resturantInfo.photos.length;
  }



  addOrder(){
    this.orderPlaced=true;
    this.httpService.addOrder(this.resturantId||'').subscribe((responce)=>{
        console.log('Order added successfully',responce);
    },
    (error)=>{
      console.log('Error',error);
    })
  }
  
}

