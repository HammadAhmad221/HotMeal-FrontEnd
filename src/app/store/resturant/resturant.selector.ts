// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { RESTURANT_STATE_NAME } from "../store.constants";
// import { ResturantState } from "./resturant.state";

// const getResturantState = createFeatureSelector<ResturantState>(RESTURANT_STATE_NAME);

// export const getAllResturants =()=> createSelector(
//   getResturantState,
//   (state) => state.allResturants
// );

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RESTURANT_STATE_NAME } from "../store.constants";
import { ResturantState } from "./resturant.state";

const getResturantState = createFeatureSelector<ResturantState>(RESTURANT_STATE_NAME);

export const getAllResturants = createSelector(
  getResturantState,
  (state) => state.allResturants
);

export const getRestaurantById = (id: string) => createSelector(
  getResturantState,
  (state) => state.allResturants.find((restaurant) => restaurant._id == id)
);
