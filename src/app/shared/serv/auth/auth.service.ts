import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  // Checks if user is signed in.
  static isSignedIn(): boolean {
    if (firebase.auth().currentUser) {
      console.log('isSignedIn Method Reports: User is Signed in');
      return true;
    } else {
      console.log('isSignedIn Method Reports: User is NOT Signed in');
      return false;
    }
  }

  currentUser(): boolean {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

  // Sends Email Verification Mail.
  static sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then();
  }

  // Sends Password Reset Email.
  sendPasswordResetEmail(email: string) {
    firebase.auth().sendPasswordResetEmail(email).then(res => {
      console.log('Password Reset email is send to the user');
    }).catch(error => {
      console.log('an error occurred sending Password Reset email to user');
      console.log(error);
    });
  }

  // Logs User In.
  doLogin(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
        console.log('doLogin Succesfull, User is logged in');
      }, err => {
        reject(err);
        console.log('doLogin Unsuccesfull, User is NOT logged in');
      });
    });
  }

  // Register User.
  createAccount(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then( res => {
        resolve(res);
        console.log('Account created succesfully');
      }, error => {
        reject(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('there was an error in the creating of the account');
        console.log('error code: ' + errorCode + ' error message: ' + errorMessage);
      });
    });
  }

  // Signs User Out.
  doSignOut() {
    firebase.auth().signOut()
      .then(res => {
        console.log('Sign Out Succesfull, User is Logged out');
      })
      .catch(err => {
        console.log('Sign Out Unsuccesfull, User is NOT Logged out (succesfully)');
      });
  }

  persistenceLogin(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(result => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      // .then(response => console.log(response))
      // .then(user => new Promise((resolve, reject) => {
      //   return this.doLogin(email, password);
      // }))
      .catch(error => alert(error));
    });
  }
}
