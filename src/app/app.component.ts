import {Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClimbingFrontEnd';
  // myLoggedIn: boolean;
  // loggedInChange(event) {
  //   this.myLoggedIn = event;
  //   console.log('Hello');
  // }
  enabled: boolean;

  reloadTree() {
    this.enabled = false; // switching to false
    this.enabled = true; // and back to true
    // this does not notify angular that something has actually changed
  }

  ngOnInit(): void {
    this.reloadTree();
  }
}
