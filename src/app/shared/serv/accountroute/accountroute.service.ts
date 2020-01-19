import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AddAccountCompetition} from '../../formData/AddAccountCompetition';
import {AddAccountRoute} from '../../formData/AddAccountRoute';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountrouteService {

  constructor(private http: HttpClient) {
  }

  public source = environment.source + '/accountroutes';

  save(addAccountRoute: AddAccountRoute) {
    const body = JSON.stringify(addAccountRoute);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<AddAccountCompetition>(this.source, body, options).subscribe();
  }

  createAccountRouteCompetition(addAccountRoute: AddAccountRoute) {
    const body = JSON.stringify(addAccountRoute);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<AddAccountCompetition>(this.source + '/competition', body, options).subscribe();
  }

  getAccountRouteCountByEmail(email: string): Observable<number> {
    return this.http.get<number>(this.source + '/accountroutecount/' + email);
  }
}
