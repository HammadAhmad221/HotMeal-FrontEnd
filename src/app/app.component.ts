import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotmeal-web';
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(public httpService: HttpService) {}

  ngOnInit(): void {
    this.getCurrentLocation();
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.getAddress();
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

  getAddress() {
    this.httpService
      .getAddress(this.latitude || 0, this.longitude || 0)
      .subscribe((response) => {
        console.log('response: ', response);
      });
  }
}
