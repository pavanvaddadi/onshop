import { TokenService } from './../../core/_services/token.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public  userName: string;
  public password: string;

  constructor(public authService: AuthService,
              public tokenService: TokenService,
              public router: Router) { }

  ngOnInit() {}

  public login() {
    this.authService.login(this.userName, this.password).subscribe((response) => {
      console.log(response);
      this.tokenService.authToken = response.token;
      this.router.navigate(["/products/list"]);

    }, (error) => {
      console.log("error in login component and in login Method()" + error)
    }, () => {
    });
  }

}
