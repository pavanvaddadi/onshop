import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './services/auth.guard';

  const routes: Routes = [
    {
        path: 'list',
        component: ProductListComponent,
        canActivate: [AuthGuard]
      },
    {
      path: 'list/:id',
      component: ProductDetailsComponent,
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
