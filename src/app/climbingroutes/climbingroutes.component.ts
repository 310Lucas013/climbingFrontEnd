import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ClimbingRoute} from '../shared/models/ClimbingRoute';
import {ClimbingrouteService} from '../shared/serv/climbingroutes/climbingroute.service';
import {ClimbingRouteFilter} from '../shared/models/ClimbingRouteFilter';
import {PageEvent} from '@angular/material';
import * as firebase from "firebase";
import {AddAccountRoute} from "../shared/formData/AddAccountRoute";
import {AccountrouteService} from "../shared/serv/accountroute/accountroute.service";

@Component({
  selector: 'app-climbingroutes',
  templateUrl: './climbingroutes.component.html',
  styleUrls: ['./climbingroutes.component.css']
})
export class ClimbingroutesComponent implements OnInit {

  id: number;
  email: string;
  length: number;
  pageSize: number;
  addAccountRoute: AddAccountRoute;
  pageEvent: PageEvent;
  filter: ClimbingRouteFilter;
  climbingRoutes: ClimbingRoute[];
  //   = [new ClimbingRoute(1, 'The Challenge'),
  // new ClimbingRoute(2, 'The Roof')];

  constructor(private service: ClimbingrouteService, private accountRouteService: AccountrouteService) {
    this.filter = new ClimbingRouteFilter();
    this.pageSize = 1;
  }

  ngOnInit() {
    this.service.getFilterRouteCount().subscribe(data => {
      this.length = data;
    });
    this.service.getFilterRoutes(this.filter).subscribe(routeData => {
      this.climbingRoutes = routeData as ClimbingRoute[];
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

  climbingTry(routeId: number, zone: number) {
    // TODO ADD CLIMBING TRY TO USER WITH ZONE.
    console.log(zone);
    this.email = firebase.auth().currentUser.email;
    this.addAccountRoute = new AddAccountRoute(this.email, routeId, zone);
    this.accountRouteService.save(this.addAccountRoute);
  }

}
