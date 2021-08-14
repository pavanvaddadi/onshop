import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnshopApiService {

  constructor(public http: HttpClient) { }

  public get(url: string) {
    return this.http.get(url);
  }

   public post(url , body) {
     return this.http.post(url,body);
   }
}
