import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InputEmail1: string;
  InputPassword1: string;

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.InputEmail1);
    console.log(this.InputPassword1);
  }

}
