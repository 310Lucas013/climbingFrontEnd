import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClimbingRouteFilter {
  uid: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  // direction is 'ASC' or 'DESC'
  direction: string;

  constructor() {
    this.uid = '';
    this.pageNumber = 0;
    this.pageSize = 20;
    this.sortBy = 'route_id';
    this.direction = 'ASC';
  }
}
