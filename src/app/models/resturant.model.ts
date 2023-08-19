export interface IRestaurant {
    // [key: string]: any
    _id:string;
    name: string;
    rating: number;
    views: number;
    address: string;
    phoneNo: string;
    location: {
      type: string;
      coordinates: number[];
    };
    status:string;
    timing:string[];
    photos:string[];
    limitReached:boolean;
    maxOrdersPerMonth:number;
    featured:boolean;
    plan:number;
  
  }
  