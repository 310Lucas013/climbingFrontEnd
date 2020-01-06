import { Component, OnInit } from '@angular/core';
import {Competition} from '../shared/models/Competition';
import {CompetitionService} from '../shared/serv/competition/competition.service';
import {AccountcompetitionService} from '../shared/serv/accountcompetition/accountcompetition.service';
import * as firebase from 'firebase';
import {AddAccountCompetition} from '../shared/formData/AddAccountCompetition';
import {Group} from '../shared/enums/Group';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  constructor(private service: CompetitionService, private accompservice: AccountcompetitionService) { }
  competitions: Competition[] = [new Competition(1, 'TriggerFinger 2016', '02/02/2016',
    '07/07/2016', 12),
    new Competition(2, 'TriggerFinger 2017', '02/02/2016',
      '07/07/2016', 14)];

  email: string;
  group: Group;

  ngOnInit() {
    // this.getCompetitions(1);
  }

  // getCompetitions(id: number) {
  //   this.accompservice.getById(id).subscribe(
  //     data => {
  //       this.competitions = data.forEach()
  //     }
  //   );
  // }

  enterCompetition(name: string) {
    this.group = Group.BEGINNER;
    this.email = firebase.auth().currentUser.email;
    this.accompservice.save(new AddAccountCompetition(name, this.email, this.group));
  }

}
