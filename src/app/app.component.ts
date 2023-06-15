import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getCurrentLocation()
  }
  title = 'hotmeal-web';
  latitude: number | undefined;
  longitude: number | undefined;

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.latitude, this.longitude);
        },
        (error) => {
          console.log('Error occurred while retrieving location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }


}
