import { Component, OnInit } from '@angular/core';
import {CompetitionRoute} from '../shared/models/CompetitionRoute';
import {ActivatedRoute} from '@angular/router';
import {CompetitionrouteService} from '../shared/serv/competitionroute/competitionroute.service';
import * as firebase from 'firebase';
import {AddAccountRoute} from '../shared/formData/AddAccountRoute';
import {AccountrouteService} from '../shared/serv/accountroute/accountroute.service';

@Component({
  selector: 'app-competitionroutes',
  templateUrl: './competitionroutes.component.html',
  styleUrls: ['./competitionroutes.component.css']
})
export class CompetitionroutesComponent implements OnInit {

  id: number;
  email: string;
  addAccountRoute: AddAccountRoute;
  competitionRoutes: CompetitionRoute[];

  constructor(private route: ActivatedRoute, private service: CompetitionrouteService, private accountRouteService: AccountrouteService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.competitionRoutes = [];
      this.service.getRoutesByCompetitionId(this.id).subscribe(data => {
        console.log(data);
        this.competitionRoutes = data as CompetitionRoute[];
      });
    });
  }

  ngOnInit() {

  }

  climbingTry(routeId: number, zone: number) {
    console.log(routeId + ',' + zone);
    this.email = firebase.auth().currentUser.email;
    this.addAccountRoute = new AddAccountRoute(this.email, routeId, zone);
    this.accountRouteService.save(this.addAccountRoute);
  }
}
