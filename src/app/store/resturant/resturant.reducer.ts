import { createReducer, on } from "@ngrx/store";
import { ResturantState } from "./resturant.state";
import { fetchAllResturants } from "./resturant.action";

const initialState: ResturantState = {
  allResturants: [], // Initialize as an empty array
};

const resturantReducer = createReducer(
    initialState,
    on(fetchAllResturants, (state, action) => ({
      ...state,
      allResturants: action.payload,
    }))
  );
  

export function ResturantReducer(state: ResturantState, action: any) {
  return resturantReducer(state, action);
}
