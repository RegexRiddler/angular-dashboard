import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
  providers: [LoginService]
})

export class LoginPageComponent implements OnInit {
  isUsername: boolean = false;
  isPassword: boolean = false;
  userObj;

  constructor(protected loginService: LoginService, protected router: Router) {}

  ngOnInit() {
    localStorage.setItem('Username', 'admin');
    localStorage.setItem('Password', '1234');
    this.userObj = this.loginService.getLoginDetails();
  }

  testUserDetails(userDetails) {
    if (userDetails.username !== this.userObj.username || userDetails.password !== this.userObj.password) {
    } 
    if (userDetails.username !== this.userObj.username) {
      this.isUsername = true;
    }
    if (userDetails.password !== this.userObj.password) {
      this.isPassword = true;
    } else {
      sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
      this.router.navigate(['/dashboard']);
      this.isUsername = false;
      this.isPassword = false;
    }
  }
}
