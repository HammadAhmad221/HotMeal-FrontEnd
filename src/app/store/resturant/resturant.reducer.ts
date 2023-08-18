// import { createReducer, on } from "@ngrx/store";
// import * as ResturantActions from "./resturant.action"; // Import your action types here
// import { ResturantState } from "./resturant.state";

// const initialState: ResturantState = {
//   allResturants: [],
// };

// const _resturantReducer = createReducer(
  
//   initialState,
//   on(ResturantActions.fetchAllResturantsSuccess, (state, action) => ({
//     ...state,
//     allResturants: action.payload,
//   }))
// );

// export function ResturantReducer(state: ResturantState, action: any) {
//   return _resturantReducer(state, action);
// }


import { createReducer, on } from "@ngrx/store";
import * as ResturantActions from "./resturant.action"; // Import your action types here
import { ResturantState } from "./resturant.state";

const initialState: ResturantState = {
  allResturants: [],
};

const _resturantReducer = createReducer(
  
  initialState,
  on(ResturantActions.fetchAllResturantsSuccess, (state, action) => ({
    ...state,
    allResturants: action.payload,
  }))
);

export function ResturantReducer(state: ResturantState, action: any) {
  return _resturantReducer(state, action);
}
