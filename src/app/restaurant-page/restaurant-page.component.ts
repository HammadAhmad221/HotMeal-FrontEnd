// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {getRestaurantById} from '../store/resturant/resturant.selector';
//import { ResturantState } from '../store/resturant/resturant.state';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit {
  restaurantId: string | null = null; // Initialize with null or modify type
  resturantInfo: any = [];
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idFromParams = params.get('restaurantId');
      if (idFromParams !== null) {
        this.restaurantId = idFromParams;
        this.store
          .select(getRestaurantById(this.restaurantId))
          .subscribe((details) => {
            console.log('Details:', details);
            this.resturantInfo = details;
          });
      }
    });
  }
  slickCarouselConfig = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
}
