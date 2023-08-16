import { createAction, props } from '@ngrx/store';
import { RestaurantData } from './data.state';

export const fetchData = createAction('[Data] Fetch Data');
export const fetchDataSuccess = createAction(
  '[Data] Fetch Data Success',
  props<{ data: RestaurantData[] }>()
);
