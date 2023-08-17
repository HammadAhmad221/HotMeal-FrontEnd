// import { createFeatureSelector, createSelector } from "@ngrx/store";

// import { RESTURANT_STATE_NAME } from "../store.constants";
// import { ResturantState } from "./restursnt.state";

// const getResturantState =  createFeatureSelector<ResturantState>(RESTURANT_STATE_NAME);

// export const getAllResturants = ()=> createSelector(getResturantState, (state) => {
//   return state.allResturants;
// });




// export const getResturant = (resturantID:string)=> createSelector(getResturantState, (state) => {
//   for(let resturant of state.allResturants){
//     if(resturant._id==resturantID){
//       return resturant;
//     }
//   }
//   return null;
// });

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResturantState } from './resturant.state';

export const getResturantState = createFeatureSelector<ResturantState>('resturant');

export const getAllResturants = createSelector(getResturantState, (state) => state.allResturants);

