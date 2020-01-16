import { Component, OnInit } from '@angular/core';
import {CompetitionRoute} from '../shared/models/CompetitionRoute';
import {ActivatedRoute} from '@angular/router';
import {CompetitionrouteService} from '../shared/serv/competitionroute/competitionroute.service';
import * as firebase from 'firebase';
import {AddAccountRoute} from '../shared/formData/AddAccountRoute';
import {AccountrouteService} from '../shared/serv/accountroute/accountroute.service';
import {WebSocketService} from '../shared/serv/websocket/websocket.service';

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

  constructor(private route: ActivatedRoute, private service: CompetitionrouteService, private accountRouteService: AccountrouteService, private wsService: WebSocketService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.competitionRoutes = [];
      this.service.getRoutesByCompetitionId(this.id).subscribe(data => {
        console.log(data);
        this.competitionRoutes = data as CompetitionRoute[];
      });
    });
    this.wsSubscribe();
  }

  ngOnInit() {

  }

  climbingTry(routeId: number, zone: number) {
    console.log(routeId + ',' + zone);
    this.email = firebase.auth().currentUser.email;
    this.addAccountRoute = new AddAccountRoute(this.email, routeId, zone);
    this.accountRouteService.save(this.addAccountRoute);
  }

  private wsSubscribe() {
    // Open connection with server socket
    let stompClient = this.wsService.connect();

    console.log(stompClient);

    stompClient.connect({}, frame => {
      console.log(stompClient);
      console.log(frame);
      // Subscribe to notification topic


      stompClient.subscribe('/topic/messages', notification => {
        // if (notification.body.startsWith('[transform]')) {

          // this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
          // rest of the logic goes here...
        // }
        if (notification.body) {
          console.log(notification.body);
          // this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
          // rest of the logic goes here...
        }
      });
      //
      // stompClient.subscribe('/topic/message/user', notification => {
      //   if (notification.body.startsWith('[transform]')) {
      //     this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
      //     // rest of the logic goes here...
      //   }
      // });
      //
      // stompClient.send('/topic/message/user', notification => {
      //   if (notification.body.startsWith('[transform]')) {
      //     this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
      //     // rest of the logic goes here...
      //   }
      // });
    });
  }
}
