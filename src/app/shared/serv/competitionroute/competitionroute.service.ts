import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CompetitionRoute} from '../../models/CompetitionRoute';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionrouteService {

  constructor(private http: HttpClient) {
  }

  public source = environment.source + '/routecompetitions';

  public getRoutesByCompetitionId(id: number): Observable<any[]> {
    return this.http.get<any>(this.source + '/' + id);
  }
}
