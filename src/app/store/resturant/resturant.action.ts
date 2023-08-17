import { createAction, props } from "@ngrx/store";
import { FETCH_ALL_RESTURANTS_ACTION, FETCH_RESTURANT_ACTION, FETCH_RESTURANT_REQUES } from "../store.constants";
import { IGetResturantRequest } from "src/app/models/request/getResturant.request";
import { IRestaurant } from "src/app/models/resturant.model";


// export const fetchResturant = createAction(FETCH_RESTURANT_ACTION,props<{id:string}>);
// export const fetchAllResturants = createAction(FETCH_ALL_RESTURANTS_ACTION,props<{ payload: IGetResturantRequest[] }>());
export const fetchAllResturants = createAction(FETCH_ALL_RESTURANTS_ACTION,props<{request:IGetResturantRequest}>());
export const fetchAllResturantsSuccess = createAction(FETCH_RESTURANT_REQUES,props<{ payload: IRestaurant[] }>());