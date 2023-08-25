// import { Component } from '@angular/core';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChildren('fileInput') fileInputs!: QueryList<ElementRef>;

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
  
  
  showValue: boolean | undefined;
  }
 

