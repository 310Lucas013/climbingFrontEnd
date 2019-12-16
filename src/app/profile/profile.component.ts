import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.currentUser());
    if (!this.authService.currentUser()) {
      this.router.navigate(['/login']);
    }
  }

}
