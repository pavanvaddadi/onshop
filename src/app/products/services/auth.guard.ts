import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from 'src/app/core/_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: TokenService, public router: Router) {}

  canActivate(): boolean {
      if (!this.auth.authToken) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
  
}
