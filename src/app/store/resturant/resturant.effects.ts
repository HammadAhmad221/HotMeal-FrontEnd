import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpService } from 'src/app/restaurant-api.service';
import { fetchAllResturants } from './resturant.action';
import { FETCH_ALL_RESTURANTS_ACTION } from '../store.constants';
import { IRestaurant } from 'src/app/models/resturant.model';

@Injectable()
export class ResturantEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_ALL_RESTURANTS_ACTION),
      switchMap(() =>
        this.httpService.getResturants().pipe(
          map((data: IRestaurant[]) => {
            return fetchAllResturants({ payload: data });
          }),
          catchError((error) => {
            console.error(error);
            return of([] as any);
          })
        )
      )
    )
  );
}
