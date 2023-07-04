import { Component } from '@angular/core';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
featuredRestaurants:any[]=["","","","","","","","","",""];
// Api call here 
constructor(private_obj:GeolocationService){
  private_obj.postaddress().subscribe((data: any)=>(
    console.log(data)
  ))
}
}
function getaddress() {
  throw new Error('Function not implemented.');
}
// api code end here
