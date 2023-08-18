import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ResturantActions from './resturant.action';
import { HttpService } from 'src/app/restaurant-api.service';
import { IRestaurant } from 'src/app/models/resturant.model';

@Injectable()
export class ResturantEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  // fetchData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ResturantActions.fetchAllResturants),
  //     switchMap((action) => {
  //       console.log('Fetching resturants with request:', action.request); // Log the request payload
  //       return this.httpService.getResturants(action.request).pipe( // Pass the request payload to the service
  //         //map((data: IRestaurant[]) =>({ type: ResturantActions.fetchAllResturantsSuccess, payload:data})
  //          map((data: IRestaurant[]) =>{  console.log(data); 
  //            ResturantActions.fetchAllResturantsSuccess({ payload: data })}

  //         ),
  //         catchError((error) => {
  //           console.error(error);
  //           return of([] as any);
  //         })
  //       );
  //     })
  //   )
  // );
  fetchData$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ResturantActions.fetchAllResturants),
    switchMap((action) => {
      const request = action.request; // Make sure action.request is set properly
      console.log('Fetching resturants with request:', request);

      return this.httpService.getResturants(request).pipe(
        map((data: IRestaurant[]) => {
          console.log('Fetched data:', data);
          //map((data: IRestaurant[]) =>({ type: ResturantActions.fetchAllResturantsSuccess, payload:data})

          return ResturantActions.fetchAllResturantsSuccess({ payload: data });
        }),
        catchError((error) => {
          console.error(error);
          return of([] as any);
        })
      );
    })
  )
);


}
