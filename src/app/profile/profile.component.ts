import {Component, EventEmitter, Input, OnInit, Output, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AuthService} from '../shared/serv/auth/auth.service';
import {Router} from '@angular/router';
import {AccountService} from '../shared/serv/account/account.service';
import * as firebase from 'firebase';
import {Account} from '../shared/models/Account';
import {UpdateAccount} from '../shared/formData/UpdateAccount';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  uid: string;
  account: Account;
  updatedAccount: UpdateAccount;

  constructor(private router: Router, private authService: AuthService, private service: AccountService) {

  }

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
    } else {
      this.account = new Account(firebase.auth().currentUser.email, firebase.auth().currentUser.uid);
      this.email = firebase.auth().currentUser.email;
      this.uid = firebase.auth().currentUser.uid;
      this.service.getAccountByEmail(firebase.auth().currentUser.email).subscribe(data => {
        this.account = data;
        console.log(data);
        this.firstName = data.firstName;
        this.middleName = data.middleName;
        this.lastName = data.lastName;
      });
    }
    // this.doSomething();
  }

  updateAccount() {
    this.updatedAccount = new UpdateAccount(this.firstName, this.middleName, this.lastName, this.email, this.uid);
    console.log(this.updatedAccount);
    this.service.update(this.updatedAccount);
  }

}
