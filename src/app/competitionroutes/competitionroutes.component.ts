import { Component, OnInit } from '@angular/core';
import {CompetitionRoute} from '../shared/models/CompetitionRoute';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-competitionroutes',
  templateUrl: './competitionroutes.component.html',
  styleUrls: ['./competitionroutes.component.css']
})
export class CompetitionroutesComponent implements OnInit {

  id: number;
  competitionRoutes: CompetitionRoute[];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
  }

}
