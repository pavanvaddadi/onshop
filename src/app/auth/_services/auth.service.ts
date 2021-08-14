import { environment } from './../../../environments/environment';
import { OnshopApiService } from './../../core/_services/onshop-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   public url = environment.url + '/auth/login';

  constructor(public apiService: OnshopApiService) {
  
  }

  public login(uname: string, pwd: string): Observable<any> {
      let reqBody =  {
            "username":uname,
            "password":pwd
        }
    return  this.apiService.post(this.url,reqBody);
  }
}

