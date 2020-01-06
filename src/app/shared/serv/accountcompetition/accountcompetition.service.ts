import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Account} from '../../models/Account';
import {AddAccountCompetition} from '../../formData/AddAccountCompetition';

@Injectable({
  providedIn: 'root'
})
export class AccountcompetitionService {

  constructor(private http: HttpClient) {
  }

  public source = environment.source + '/accountcompetitions';

  save(addAccountCompetition: AddAccountCompetition) {
    const body = JSON.stringify(addAccountCompetition);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<AddAccountCompetition>(this.source, body, options).subscribe();
  }

}
