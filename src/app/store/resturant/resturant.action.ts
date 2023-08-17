import { createAction, props } from "@ngrx/store";
import { FETCH_ALL_RESTURANTS_ACTION, FETCH_RESTURANT_ACTION } from "../store.constants";
import { IRestaurant } from "src/app/models/resturant.model";


export const fetchResturant = createAction(FETCH_RESTURANT_ACTION);
export const fetchAllResturants = createAction(FETCH_ALL_RESTURANTS_ACTION,props<{ payload: IRestaurant[] }>());
