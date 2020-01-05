import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {async} from "@angular/core/testing";

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
    console.log(this.authService.currentUser());
    if (this.authService.currentUser()) {
      this.location.back();
    }
  }

  async signIn() {
    console.log(this.InputEmail1);
    console.log(this.InputPassword1);
    await this.authService.persistenceLogin(this.InputEmail1, this.InputPassword1)
      .then(data => {
        console.log('Hello');
        console.log(data);
        // this.authService.updateLocalStorage()
        //   .then(loggedIn => {
        //     if (loggedIn) {
        //       this.router.navigate(['/profile']);
        //     }
        //   });
        setTimeout(() => {
          this.updateLoggedIn();
        }, 2000);
        // .then(this.router.navigate['/profile']);
        // .then(data => {
        //
        //
        // },
        //   reason => {
        //     console.log(reason);
        //   });
      });
  }

  register() {
    this.router.navigate(['/register']);
  }

  updateLoggedIn() {
    this.authService.updateLocalStorage()
      .then(loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/profile']);
        }
      });
  }
}
