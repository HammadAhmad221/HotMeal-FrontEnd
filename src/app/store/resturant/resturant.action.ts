import { createAction, props } from "@ngrx/store";
import { FETCH_ALL_RESTURANTS_ACTION, FETCH_ALL_RESTURANT_RESPONCE, UPDATE_ALL_RESTURANTS_ACTION } from "../store.constants";
import { IGetResturantRequest } from "src/app/models/request/getResturant.request";



// export const fetchResturant = createAction(FETCH_RESTURANT_ACTION,props<{id:string}>);
// export const fetchAllResturants = createAction(FETCH_ALL_RESTURANTS_ACTION,props<{ payload: IGetResturantRequest[] }>());
export const fetchAllResturants = createAction(FETCH_ALL_RESTURANTS_ACTION,props<{request:IGetResturantRequest}>());
export const updateAllResturants = createAction(UPDATE_ALL_RESTURANTS_ACTION,props<{request:any}>());

