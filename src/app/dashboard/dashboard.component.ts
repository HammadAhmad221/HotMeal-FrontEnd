import { Component, OnInit } from '@angular/core';
import { HttpService } from '../restaurant-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData:any;

  paginatedResturantData: any;
  currentPage=1;

  paginatedOrderData: any;
  currentOrderPage=1;


  constructor(public httpService:HttpService) {}
  ngOnInit(): void {
    this.getStats();
    this.goToPage(this.currentPage);
    this.goToOrderPage(this.currentOrderPage);
  }
  // focusedItem: string | undefined;
  // setFocus(item: string): void {
  //   this.focusedItem = item;
  // }
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


  getStats(){
    this.httpService.dashboardData().subscribe((responce)=>{
      this.dashboardData=responce;
      // console.log('Dashboard Data',responce);
    })
  }

  getPaginatedResturantData(page: number) {
    // Make a call to your paginated API using the page parameter
    this.httpService.getAllResturants(page).subscribe((response) => {
      // console.log('Paginated Data', response);
      this.paginatedResturantData = response; // Store the paginated data
    });
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.getPaginatedResturantData(this.currentPage);
  }

  getPaginatedOrdersData(page:number){
    this.httpService.getAllOrders(page).subscribe((responce)=>{
      // console.log('orderdata',responce);
      this.paginatedOrderData =responce;
    });
  }
  goToOrderPage(page:number){
    this.currentOrderPage=page;
    this.getPaginatedOrdersData(this.currentOrderPage);
  }
  
  // showValue: boolean | undefined;
  }
 

