import { Component, OnInit } from '@angular/core';
import { HttpService } from '../restaurant-api.service';
import { Store } from '@ngrx/store';
import { fetchDataSuccess } from '../data.actions';
import { selectRestaurants } from '../data.selectors';
import { Observable } from 'rxjs';
import { RestaurantData } from '../data.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  restaurants$: Observable<RestaurantData[]>;

  // Initialize with default values
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(public httpService: HttpService, private store: Store) {
    this.restaurants$ = this.store.select(selectRestaurants);
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.getResturants(this.longitude, this.latitude);
        },
        (error) => {
          console.log('Error occurred while retrieving location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  getResturants(longitude: number, latitude: number) {
    this.httpService.getResturants(longitude, latitude).subscribe(
      (response: any) => {
        console.log('Response:', response);
        if (response ) {
          // Dispatch the action only once after receiving the response
          this.store.dispatch(fetchDataSuccess({ data: response }));
        } else {
          console.error('Invalid API response structure.');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}

