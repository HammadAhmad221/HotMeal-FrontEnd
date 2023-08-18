import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ResturantActions from './resturant.action';
import { HttpService } from 'src/app/restaurant-api.service';
import { IRestaurant } from 'src/app/models/resturant.model';
import { FETCH_ALL_RESTURANTS_ACTION, UPDATE_ALL_RESTURANTS_ACTION } from '../store.constants';

@Injectable()
export class ResturantEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  fetchAllResturants$ = createEffect(() =>
  this.actions$.pipe(
    ofType(FETCH_ALL_RESTURANTS_ACTION),
    switchMap((action:any) => {
      return this.httpService.getResturants(action.request).pipe(
        map(data => ({ type: UPDATE_ALL_RESTURANTS_ACTION, payload:data}))

      );
    })
  )
);


}
