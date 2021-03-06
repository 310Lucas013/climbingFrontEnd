import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Account} from '../../models/Account';
import {AddAccountCompetition} from '../../formData/AddAccountCompetition';
import {AccountCompetition} from '../../models/AccountCompetition';
import {Observable} from 'rxjs';

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

  getAccountCompetitionsById(id: number): Observable<AccountCompetition[]> {
    return this.http.get<AccountCompetition[]>(this.source + '/' + id);
  }

  getParticipantsByCompetitionName(name: string): Observable<number> {
    return this.http.get<number>(this.source + '/participants/' + name);
  }

  getAccountCompetitionByCompetitionName(name: string): Observable<AccountCompetition[]> {
    return this.http.get<AccountCompetition[]>(this.source + '/name/' + name);
  }

  getAccountCompetitions(): Observable<AccountCompetition[]> {
    return this.http.get<AccountCompetition[]>(this.source);
  }

}
