import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../MyErrorStateMatcher';
import {Router} from '@angular/router';
import {AuthService} from '../shared/serv/auth/auth.service';
import * as firebase from 'firebase/app';
import {Account} from '../shared/models/Account';
import {AccountService} from '../shared/serv/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  repeatPasswordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  RegisterEmail1: string;
  RegisterPassword1: string;
  RegisterPassword2: string;

  account: Account;

  tempUid: string;

  constructor(private router: Router, private service: AccountService, private authService: AuthService) { }

  // Back button method.
  back() {
    this.router.navigate(['/login']);
  }

  register() {
    this.accountCreate(this.RegisterEmail1, this.RegisterPassword1, this.RegisterPassword2);
  }

  // Method that creates an account
  accountCreate(email: string, password: string, repeatPassword: string) {
    if (password === repeatPassword) {
      // Createuser
      this.authService.createAccount(email, password).then(data => {
        console.log(data);
        console.log('Account created Succesfully');
        // setTimeout(() => {
        this.authService.doLogin(email, password).then(dataLogin => {
            console.log(dataLogin);
            console.log('User is Logged In Succesfully');
            // Getting UserId of current User.
            this.tempUid = firebase.auth().currentUser.uid;
            console.log('userId obtained which is: ' + this.tempUid);
            this.account = new Account(email, this.tempUid);
            console.log('Account created: ' + this.account);
            // Saving Account of current User in the Back-End
            this.service.save(this.account);
            console.log('Account saved');
            // Redirecting to Overview page.
            this.router.navigate(['/profile']).then(value => {
              console.log('Profile navigation succesfull=' + value);
            }, reason => {
              console.log('Profile navigation Unsuccesfull=' + reason);
            });
          },
          reasonLogin => {
            console.log('Login Failed');
            console.log(reasonLogin);
          });
      }, reason => {
        console.log('Creation of the Account failed');
        console.log(reason);
      });
    }
  }

  ngOnInit() {
  }

}
