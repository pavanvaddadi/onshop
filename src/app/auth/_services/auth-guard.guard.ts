import { TokenService } from './../../core/_services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(public auth: TokenService, public router: Router) {}

  canActivate(): boolean {
      if (!this.auth.authToken) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
  
}
