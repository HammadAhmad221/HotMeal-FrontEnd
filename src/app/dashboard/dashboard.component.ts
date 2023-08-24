import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeolocationService } from '../geolocation.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
activeLink: string = '';



  constructor() {}
  ngOnInit(): void {
    // console.log('Dashboard Page');
  }
  focusedItem: string | undefined;
  setFocus(item: string): void {
    this.focusedItem = item;
  }
  activeButton: string = 'button1';

  setActiveButton(button: string): void {
    if (button === 'button1') {
      this.activeButton = 'button1';
    } else if (button === 'button2') {
      this.activeButton = 'button2';
    } else if (button === 'button3') {
      this.activeButton = 'button3';
    }else if(button==='button4'){
      this.activeButton='button4';
    }
  }

  setActiveLink(buttonName: string): void {
    this.activeButton = buttonName;
  }
  
  
  showValue: boolean | undefined;
  }
 

