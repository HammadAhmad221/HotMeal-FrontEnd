import { IRestaurant } from "src/app/models/resturant.model";

export interface ResturantState{
    allResturants:IRestaurant[];
  }

  export const initialState:ResturantState={
    allResturants:[]
  }
