import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';  // Import the select function
import { getAllResturants } from '../store/resturant/resturant.selector';
import { fetchAllResturants } from '../store/resturant/resturant.action';
import { HttpService } from 'src/app/restaurant-api.service';
import { IRestaurant } from '../models/resturant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resturants$!: Observable<IRestaurant[]>; // No need to initialize here

  constructor(private store: Store, private httpService: HttpService) {}

  ngOnInit(): void {
    this.resturants$ = this.store.select(getAllResturants); // Use the select function

    this.httpService.getResturants().subscribe(
      (data: IRestaurant[]) => {
        this.store.dispatch(fetchAllResturants({ payload: data }));
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
