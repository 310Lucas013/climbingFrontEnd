import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AddAccountCompetition} from '../../formData/AddAccountCompetition';
import {AddAccountRoute} from '../../formData/AddAccountRoute';

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
}
