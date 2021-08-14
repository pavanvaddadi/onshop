import { environment } from './../../../environments/environment';
import { OnshopApiService } from './../../core/_services/onshop-api.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {
  public url =  environment.url ;
  

  constructor(public apiService: OnshopApiService) { }

 public getProductsList(paramters) {

     let url = this.url + paramters;
     console.log(url);
     return this.apiService.get(url);
  }
}
