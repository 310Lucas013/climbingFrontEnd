import {Component, OnInit} from '@angular/core';
import {Competition} from '../shared/models/Competition';
import {CompetitionService} from '../shared/serv/competition/competition.service';
import {AccountcompetitionService} from '../shared/serv/accountcompetition/accountcompetition.service';
import * as firebase from 'firebase';
import {AddAccountCompetition} from '../shared/formData/AddAccountCompetition';
import {Group} from '../shared/enums/Group';
import {AccountCompetition} from '../shared/models/AccountCompetition';
import {Router} from '@angular/router';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  constructor(private service: CompetitionService, private accompservice: AccountcompetitionService, private router: Router) {
  }

  competitions: Competition[] = [new Competition(1, 'TriggerFinger 2016', '02/02/2016',
    '07/07/2016'),
    new Competition(2, 'TriggerFinger 2017', '02/02/2016',
      '07/07/2016')];

  accountCompetitions: AccountCompetition[] = [];
  tempAccountCompetitions: AccountCompetition[];

  email: string;
  group: Group;

  ngOnInit() {
    // GetAllCompetitions
    this.service.getCompetitions().subscribe(data => {
      this.competitions = data;
      // For Loop of all competitions
      for (let i = 0; i <= this.competitions.length; i++) {
        // Get Additional information of Competitions (Participations and group)
        this.accompservice.getAccountCompetitionByCompetitionName(this.competitions[i].name).subscribe(accounts => {
          // Temporary Storage
          this.tempAccountCompetitions = accounts;
          console.log(i);
          console.log('accounts');
          console.log(accounts);
          // Setting Participants
          this.competitions[i].participants = this.tempAccountCompetitions.length;
          // Transfering AccountCompetitions from Temp storage to accountCompetitions.
          for (let j = 0; j <= this.tempAccountCompetitions.length; j++) {
            // if (this.accountCompetitions.length) {
            //   this.accountCompetitions = this.tempAccountCompetitions[j];
            // }
            this.accountCompetitions.push(this.tempAccountCompetitions[j]);
            console.log(this.accountCompetitions);
          }
        });
      }
    });
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

  seeRoutes(id: number) {
    this.router.navigate(['/competitionroute/' + id]);
  }

  scoreboard(id: number) {
    this.router.navigate(['/scoreboard/' + id]);
  }

}
