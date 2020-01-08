import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Competition} from '../../models/Competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) {
  }

  public source = environment.source + '/competitions';

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.source);
  }
}
