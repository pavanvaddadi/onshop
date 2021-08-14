import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public productList: Observable<any>

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log("=====");
    this.productService.getProductsList('/products').subscribe((response) => {
      this.productList = response as any;
    }, (error) => {
        console.log('error' + JSON.stringify(error))
    }, () => {
      
    }
    );
    }

}
