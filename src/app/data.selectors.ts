import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RestaurantData } from './data.state';

const selectDataFeature = createFeatureSelector<RestaurantData[]>('data');
export const selectRestaurants = createSelector(
  selectDataFeature,
  (state: RestaurantData[]) => state
);
