import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ngOnInit(): void {
    // this.toggleCondition()
  }
  focusedItem: string | undefined;
  setFocus(item: string): void {
    this.focusedItem = item;
  }
  // dashboard: boolean = true;
  // resturant:boolean=false;


  // toggleCondition(): void {
  //   if(this.dashboard){
  //     this.dashboard = true;
  //     this.resturant=false;
  //   }else{
  //     this.dashboard=false;
  //     this.resturant=true;
  //   }\
  activeButton: string = 'button1';

  setActiveButton(button: string): void {
    if (button === 'button1') {
      this.activeButton = this.activeButton === 'button1' ? 'button2' : 'button1';
    } else if (button === 'button2') {
      this.activeButton = this.activeButton === 'button2' ? 'button1' : 'button2';
    }
  }
  showValue: boolean | undefined;
  }
 

