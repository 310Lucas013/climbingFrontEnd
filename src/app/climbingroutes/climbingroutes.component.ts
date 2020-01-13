import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ClimbingRoute} from '../shared/models/ClimbingRoute';
import {ClimbingrouteService} from '../shared/serv/climbingroutes/climbingroute.service';
import {ClimbingRouteFilter} from '../shared/models/ClimbingRouteFilter';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-climbingroutes',
  templateUrl: './climbingroutes.component.html',
  styleUrls: ['./climbingroutes.component.css']
})
export class ClimbingroutesComponent implements OnInit {

  length: number;
  pageSize: number;
  pageEvent: PageEvent;
  filter: ClimbingRouteFilter;
  climbingRoutes: ClimbingRoute[] = [new ClimbingRoute(1, 'The Challenge'),
  new ClimbingRoute(2, 'The Roof')];

  constructor(private service: ClimbingrouteService) {
    this.filter = new ClimbingRouteFilter();
    this.pageSize = 1;
  }

  ngOnInit() {
    this.service.getFilterRouteCount().subscribe(data => {
      this.length = data;
    });
    this.service.getFilterRoutes(this.filter).subscribe(routeData => {
      this.climbingRoutes = routeData;
    });
  }

  RouteInfo(id: number) {
    console.log(id);
  }

  getRoutes(event?: PageEvent) {
    this.filter.pageNumber = event.pageIndex;
    this.filter.pageSize = event.pageSize;
    console.log(this.filter);
    this.service.getFilterRoutes(this.filter).subscribe(data => {
      console.log(data);
      this.climbingRoutes = data as ClimbingRoute[];
    });
  }

}
