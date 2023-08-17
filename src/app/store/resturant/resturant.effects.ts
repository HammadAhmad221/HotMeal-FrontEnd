// // import { createReducer, on } from "@ngrx/store";
// // import { ResturantState } from "./resturant.state";
// // import { fetchAllResturants } from "./resturant.action";

// // const initialState: ResturantState = {
// //   allResturants: [], // Initialize as an empty array
// // };

// // const resturantReducer = createReducer(
// //     initialState,
// //     on(fetchAllResturants, (state, action) => ({
// //       ...state,
// //       allResturants: action.payload,
// //     }))
// //   );
  

// // export function ResturantReducer(state: ResturantState, action: any) {
// //   return resturantReducer(state, action);
// // }

// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import * as ResturantActions from './resturant.action'; // Import your action types here
// import { FETCH_ALL_RESTURANTS_ACTION } from '../store.constants';
// import { HttpService } from 'src/app/restaurant-api.service'; // Import your HttpService
// import { IRestaurant } from 'src/app/models/resturant.model'; // Make sure the import path is correct

// @Injectable()
// export class ResturantEffects {
//   constructor(private actions$: Actions, private httpService: HttpService) {}

//   fetchData$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ResturantActions.fetchAllResturants), // Use the correct action name here
//       switchMap(() =>
//         this.httpService.getResturants().pipe(
//           map((data: IRestaurant[]) =>
//             ResturantActions.fetchAllResturantsSuccess({ payload: data }) // Dispatch the same action with a different name here
//           ),
//           catchError((error) => {
//             console.error(error);
//             return of([] as any);
//           }),
//         )
//       )
//     )
//   );
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ResturantActions from './resturant.action';
import { FETCH_ALL_RESTURANTS_ACTION } from '../store.constants';
import { HttpService } from 'src/app/restaurant-api.service';
import { IRestaurant } from 'src/app/models/resturant.model';
import { IGetResturantRequest } from 'src/app/models/request/getResturant.request'; // Import the interface

@Injectable()
export class ResturantEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResturantActions.fetchAllResturants),
      switchMap((action) => {
        console.log('Fetching resturants with request:', action.request); // Log the request payload
        return this.httpService.getResturants(action.request).pipe( // Pass the request payload to the service
          map((data: IRestaurant[]) =>
          //log for testing here
          console.log(   ResturantActions.fetchAllResturantsSuccess({ payload: data }) )
          ),
          catchError((error) => {
            console.error(error);
            return of([] as any);
          })
        );
      })
    )
  );
}
