import { Observable } from 'rxjs';
import { ProductService } from './../services/product-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],

})
export class ProductDetailsComponent implements OnInit {

  public productItem: Observable<any>;

  constructor(private _router: ActivatedRoute, 
              private _productService: ProductService) {
    
               }

  ngOnInit() {
    let param = this._router.snapshot.paramMap.get('id');
    
    this._productService.getProductsList('/products/' + param).subscribe((response) => {
         this.productItem = response as any;
    }, (error) => {
          console.log(error)
    }, () => {

    })

  }
}
