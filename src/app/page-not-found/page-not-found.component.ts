import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    console.log(this.authService.currentUser());
    if (!this.authService.currentUser()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    console.log(this.authService.currentUser());
  }

}
