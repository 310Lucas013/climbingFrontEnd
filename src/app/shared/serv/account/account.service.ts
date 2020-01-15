import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Account} from '../../models/account';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {UpdateAccount} from '../../formData/UpdateAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public source = environment.source + '/accounts';

  getIdByAccount(account: Account) {
    const body = JSON.stringify(account);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<number>(this.source + '/getid', body, options);
  }

  getIdByEmail(account: Account) {
    const body = JSON.stringify(account);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<number>(this.source + '/getidbyemail', body, options);
  }

  getAccountById(receiptId: number): Observable<any> {
    return this.http.get(this.source + '/get' + '/' + receiptId);
  }

  getAccountByEmailAndUid(email: string, uid: string): Observable<Account> {
    return this.http.post<Account>(this.source + '/getaccountemailuid', {email, uid});
  }

  save(account: Account) {
    const body = JSON.stringify(account);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<Account>(this.source, body, options).subscribe();
  }

  // verifyAccount(account: Account): Observable<BooleanReturn> {
  //   const body = JSON.stringify(account);
  //   const options = {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   };
  //   return this.http.post<BooleanReturn>(this.source + '/verifyaccount', body, options);
  // }

  loginAccount(account: Account): Observable<object> {
    const body = JSON.stringify(account);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(this.source + '/loginaccount', body, options);
  }

  update(updateAccount: UpdateAccount) {
    console.log('update requested');
    const body = JSON.stringify(updateAccount);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put<UpdateAccount>(this.source + '/update', body, options);
  }

  getAccountByEmail(email: string): Observable<Account> {
    return this.http.get<Account>(this.source + '/' + email);
  }
}
