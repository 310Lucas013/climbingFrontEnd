import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountcompetitionService} from '../shared/serv/accountcompetition/accountcompetition.service';
import {AccountCompetition} from '../shared/models/AccountCompetition';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  id: number;
  participants: AccountCompetition[];
  constructor(private route: ActivatedRoute, private service: AccountcompetitionService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.service.getAccountCompetitionsById(this.id).subscribe(data => {
      console.log(data);
      this.participants = data;
      console.log(this.participants);
    });
  }

}
