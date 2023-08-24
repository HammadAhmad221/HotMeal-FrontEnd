import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LOGIN="login";


  constructor() {}

  setAuthenticated(value: boolean) {
    if(value)
    {
    localStorage.setItem(this.LOGIN,"true");
    }else{
      localStorage.setItem(this.LOGIN,"false");
    }

  }

  isAuthenticatedUser(): boolean {
    return localStorage.getItem(this.LOGIN)==="true"?true:false;
  }
}
