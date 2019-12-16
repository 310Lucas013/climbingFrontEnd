import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  signedIn: boolean;

  constructor(private auth: AuthService, private router: Router) {
    // if (AuthService.isSignedIn()) {
    //   this.signedIn = true;
    // } else {
    //   this.signedIn = false;
    // }
    // console.log(AuthService.isSignedIn());
    this.signedIn = this.auth.currentUser();
    console.log(this.signedIn);
  }

  ngOnInit() {
    // if (AuthService.isSignedIn()) {
    //   this.signedIn = true;
    // } else {
    //   this.signedIn = false;
    // }
    // console.log(AuthService.isSignedIn());
  }

  toRoutes() {
    this.router.navigate(['/routes']);
  }

  toCompetitions() {
    this.router.navigate(['/competitions']);
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  toRegister() {
    this.router.navigate(['/register']);
  }

  toProfile() {
    this.router.navigate(['/profile']);
  }

  toLogOut() {
    this.auth.SignOut();
    this.router.navigate(['/login']);
  }
}
