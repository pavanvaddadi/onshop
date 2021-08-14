import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _authToken: string = null;

  get authToken(): string {
    return this._authToken = localStorage.getItem('authToken');
  }

  set authToken(authToken) {
    if(authToken == null) {
      localStorage.removeItem('authToken');
    } else {
      localStorage.setItem('authToken', authToken);
    }
  }

  constructor() { }
}
