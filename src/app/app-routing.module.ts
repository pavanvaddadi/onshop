import { ProductListComponent } from './products/product-list/product-list.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { PageNotFoundComponent } from './blocks/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './products/services/auth.guard';

const routes: Routes = [


  {
    path: 'block',
    loadChildren: () => import('./blocks/blocks.module').then(m => m.BlocksModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'products',
   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
   canActivate: [AuthGuard]
   
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },

  {
    path: 'login',
    component: LoginComponent
  },
   {
     path: '**',
     component: PageNotFoundComponent
   }
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
