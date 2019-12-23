import {Component, EventEmitter, Input, OnInit, Output, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  // @Input()
  // loggedIn: boolean;
  //
  // @Output()
  // change: EventEmitter<boolean> = new EventEmitter<boolean>();
  //
  // doSomething() {
  //   this.loggedIn = false;
  //   this.change.emit(this.loggedIn);
  // }

  ngOnInit() {
    console.log(this.authService.currentUser());
    if (!this.authService.currentUser()) {
      this.router.navigate(['/login']);
    }
    // this.doSomething();
  }

}
