import { Component } from '@angular/core';
import { IGetResturantRequest } from '../models/request/getResturant.request';
import * as ResturantActions from '../store/resturant/resturant.action';
import { Store } from '@ngrx/store';
import { getAllResturants, getRestaurantById } from '../store/resturant/resturant.selector';
import { GeolocationService } from '../geolocation.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  allRestuarants:any[]=[];
  totalResturants:number=0;


  constructor(
    private geolocationService: GeolocationService, // Inject the service
    private store: Store
  ) {}
  ngOnInit(): void {
    // this.toggleCondition()
    // console.log('Dashboard Page');
    this.fetchNearbyRestaurants();
    this.totalResturants=this.allRestuarants.length;
    console.log('Total Resturants:',this.totalResturants);
  }
  focusedItem: string | undefined;
  setFocus(item: string): void {
    this.focusedItem = item;
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
             console.log('Dashboard PAGE GETTING RESTURANTS',this.allRestuarants);
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

  activeButton: string = 'button1';

  // setActiveButton(button: string): void {
  //   if (button === 'button1') {
  //     this.activeButton = this.activeButton === 'button1' ? 'button2' : 'button1';
  //   } else if (button === 'button2') {
  //     this.activeButton = this.activeButton === 'button2' ? 'button1' : 'button2';
  //   }
  // }
  setActiveButton(button: string): void {
    if (button === 'button1') {
      this.activeButton = 'button1';
    } else if (button === 'button2') {
      this.activeButton = 'button2';
    } else if (button === 'button3') {
      this.activeButton = 'button3';
      // console.log(this.activeButton);
    }else if(button==='button4'){
      this.activeButton='button4';
    }
  }
  
  showValue: boolean | undefined;
  }
 

