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
