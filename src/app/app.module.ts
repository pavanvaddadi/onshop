import { TokenService } from './core/_services/token.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BlocksModule } from './blocks/blocks.module';
import { AuthModule } from './auth/auth.module';
import { OnshopApiService } from './core/_services/onshop-api.service';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './blocks/header/header.component';


@NgModule({
  declarations: [AppComponent, LoginComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), SharedModule, AppRoutingModule, CoreModule, AuthModule,BlocksModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OnshopApiService, TokenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
