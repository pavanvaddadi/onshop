import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product-service';


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ], 
  providers:[ProductService]
})
export class ProductsModule { }
