import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {AccountCompetition} from '../../models/AccountCompetition';
import {ClimbingRoute} from '../../models/ClimbingRoute';
import {ClimbingRouteFilter} from '../../models/ClimbingRouteFilter';

@Injectable({
  providedIn: 'root'
})
export class ClimbingrouteService {

  constructor(private http: HttpClient) {
  }

  public source = environment.source + '/routes';

  getFilterRouteCount(): Observable<number> {
    return this.http.get<number>(this.source + '/getfilterroutecount');
  }

  getFilterRoutes(filter: ClimbingRouteFilter): Observable<ClimbingRoute[]> {
    const body = JSON.stringify(filter);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<ClimbingRoute[]>(this.source + '/getfilterroute', body, options);
  }
}
