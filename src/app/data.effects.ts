import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpService } from './restaurant-api.service';
import { fetchData, fetchDataSuccess } from './data.actions';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchData),
      switchMap(() =>
        this.httpService.getlocation().pipe(
          mergeMap((locationData: any) => {
            const latitude = locationData.latitude;
            const longitude = locationData.longitude;
            return this.httpService.getResturants(latitude, longitude);
          }),
          map((data) =>{ 
             return fetchDataSuccess({ data });
              //return data;
        }),
          catchError((error) => {console.error(error);
          return of([] as any);
        })
        )
      )
    )
  );
}
