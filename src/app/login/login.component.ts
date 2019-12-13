import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InputEmail1: string;
  InputPassword1: string;

  constructor(private router: Router, private authService: AuthService, private location: Location) { }

  ngOnInit() {
    console.log(AuthService.isSignedIn());
    if (AuthService.isSignedIn()) {
      this.location.back();
    }
  }

  signIn() {
    console.log(this.InputEmail1);
    console.log(this.InputPassword1);
    this.authService.persistenceLogin(this.InputEmail1, this.InputPassword1);
      // .then(data => {
      //   this.router.navigate(['/profile']);
      // },
      //   reason => {
      //     console.log(reason);
      //   });
  }

}
