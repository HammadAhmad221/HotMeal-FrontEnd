import { createReducer, on } from '@ngrx/store';
import { fetchDataSuccess } from './data.actions';
import { RestaurantData } from './data.state';

const initialState: RestaurantData[] = [];

export const dataReducer = createReducer(
  initialState,
  on(fetchDataSuccess, (state, { data }) => {
    //console.log('from reducer');
    console.log('Current state:', state);
   // console.log('Received data:', data);
    return [...data];
  })
);

