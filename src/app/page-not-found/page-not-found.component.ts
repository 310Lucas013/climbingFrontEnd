import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements AfterViewInit {

  constructor(private router: Router, private authService: AuthService) {
    // console.log(AuthService.isSignedIn());
    console.log(this.authService.currentUser());
  }

  ngAfterViewInit() {
    // console.log(AuthService.isSignedIn());
    console.log(this.authService.currentUser());
    // if (!AuthService.isSignedIn()) {
    //   this.router.navigateByUrl('/navigation', { skipLocationChange: true }).then(() => {
    //     this.router.navigate(['/login']);
    //   });
    // } else {
    //   this.router.navigateByUrl('/navigation', { skipLocationChange: true });
    // }
  }

}
