// // import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
// import {getRestaurantById} from '../store/resturant/resturant.selector';
// //import { ResturantState } from '../store/resturant/resturant.state';

// @Component({
//   selector: 'app-restaurant-page',
//   templateUrl: './restaurant-page.component.html',
//   styleUrls: ['./restaurant-page.component.scss'],
// })
// export class RestaurantPageComponent implements OnInit {
//   slickCarouselConfig = {
//     autoplay: true,          // Enable automatic sliding
//     autoplaySpeed: 500,      // Time in milliseconds between each slide
//     dots: false,             // Hide the dots navigation
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   restaurantId: string | null = null; // Initialize with null or modify type
//   resturantInfo: any = [];
//   constructor(private route: ActivatedRoute, private store: Store) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       const idFromParams = params.get('restaurantId');
//       if (idFromParams !== null) {
//         this.restaurantId = idFromParams;
//         this.store
//           .select(getRestaurantById(this.restaurantId))
//           .subscribe((details) => {
//             console.log('Details:', details);
//             this.resturantInfo = details;
//           });
          
//       }
//     });
//   }
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getRestaurantById } from '../store/resturant/resturant.selector';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit, OnDestroy {
  restaurantId: string | null = null;
  resturantInfo: any = [];
  currentImageIndex = 0;
  imageSubscription: Subscription | undefined;
  imageInterval = 3000; // Time in milliseconds between each image change

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idFromParams = params.get('restaurantId');
      if (idFromParams !== null) {
        this.restaurantId = idFromParams;
        this.store.select(getRestaurantById(this.restaurantId)).subscribe((details) => {
          console.log('Details:', details);
          this.resturantInfo = details;
          this.startImageInterval(); // Start the image interval after loading the restaurant details
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.imageSubscription) {
      this.imageSubscription.unsubscribe();
    }
  }

  startImageInterval(): void {
    this.imageSubscription = interval(this.imageInterval).subscribe(() => {
      this.nextImage();
    });
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.resturantInfo.photos.length;
  }
}


