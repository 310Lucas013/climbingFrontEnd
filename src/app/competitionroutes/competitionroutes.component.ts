import { Component, OnInit } from '@angular/core';
import {CompetitionRoute} from '../shared/models/CompetitionRoute';
import {ActivatedRoute} from '@angular/router';
import {CompetitionrouteService} from '../shared/serv/competitionroute/competitionroute.service';
import * as firebase from 'firebase';
import {AddAccountRoute} from '../shared/formData/AddAccountRoute';
import {AccountrouteService} from '../shared/serv/accountroute/accountroute.service';
import {WebSocketService} from '../shared/serv/websocket/websocket.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {DifficultyBase} from '../shared/enums/DifficultyBase';
import {AddAccountRouteCompetition} from '../shared/formData/AddAccountRouteCompetition';
import * as $ from 'jquery';
import {AccountRoute} from '../shared/models/AccountRoute';

@Component({
  selector: 'app-competitionroutes',
  templateUrl: './competitionroutes.component.html',
  styleUrls: ['./competitionroutes.component.css']
})
export class CompetitionroutesComponent implements OnInit {

  id: number;
  email: string;
  addAccountRoute: AddAccountRoute;
  difficulty: DifficultyBase[];
  competitionRoutes: CompetitionRoute[];
  serverUrl = 'http://localhost:8093/socket';
  stompClient;

  constructor(private route: ActivatedRoute, private service: CompetitionrouteService,
              private accountRouteService: AccountrouteService, private wsService: WebSocketService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.competitionRoutes = [];
      this.difficulty = [];
      this.service.getRoutesByCompetitionId(this.id).subscribe(data => {
        console.log(data);
        this.competitionRoutes = data as CompetitionRoute[];
        this.competitionRoutes.forEach(value => {
          this.difficulty.push(value.route.difficulty);
        });
      });
    });
    // this.wsSubscribe();
    this.initializeWebSocketConnection();
  }

  ngOnInit() {

  }

  climbingTry(routeId: number, zone: number, competitionId: number) {
    console.log(routeId + ',' + zone);
    // Actual Code.
    // this.email = firebase.auth().currentUser.email;
    // this.addAccountRoute = new AddAccountRouteCompetition(this.email, routeId, zone, competitionId);
    // console.log(this.addAccountRoute);
    // this.accountRouteService.createAccountRouteCompetition(this.addAccountRoute);
    // Try code
    this.email = firebase.auth().currentUser.email;
    this.addAccountRoute = new AddAccountRouteCompetition(this.email, routeId, zone, competitionId);
    console.log(this.addAccountRoute);
    this.sendMessage(this.addAccountRoute);
    this.accountRouteService.createAccountRouteCompetition(this.addAccountRoute);
  }

  // private wsSubscribe() {
  //   const socket = new WebSocket('ws://localhost:8080/greeting');
  //   const stompClient = Stomp.over(socket);
  //   // Open connection with server socket
  //   // let stompClient = this.wsService.connect();
  //
  //   console.log(stompClient);
  //
  //   stompClient.connect({}, frame => {
  //   // stompClient.onmessage( data => {
  //   //   console.log(data.data);
  //     console.log(stompClient);
  //     console.log(frame);
  //     // Subscribe to notification topic
  //     stompClient.setConnected(true);
  //
  //
  //     stompClient.subscribe('/queue/reply', notification => {
  //       // if (notification.body.startsWith('[transform]')) {
  //
  //         // this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
  //         // rest of the logic goes here...
  //       // }
  //       if (notification.body) {
  //         console.log(notification.body);
  //         // this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
  //         // rest of the logic goes here...
  //       }
  //     });
  //
  //     stompClient.subscribe('/queue/errors', notification => {
  //       // if (notification.body.startsWith('[transform]')) {
  //
  //       // this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
  //       // rest of the logic goes here...
  //       // }
  //       if (notification.body) {
  //         console.log(notification.body);
  //         // this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
  //         // rest of the logic goes here...
  //       }
  //     });
  //     //
  //     // stompClient.subscribe('/topic/message/user', notification => {
  //     //   if (notification.body.startsWith('[transform]')) {
  //     //     this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
  //     //     // rest of the logic goes here...
  //     //   }
  //     // });
  //     //
  //     // stompClient.send('/topic/message/user', notification => {
  //     //   if (notification.body.startsWith('[transform]')) {
  //     //     this._snackBar.open(notification.body, '', {duration: 7000, horizontalPosition: 'right'});
  //     //     // rest of the logic goes here...
  //     //   }
  //     // });
  //   });
  //  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    // const that = this;
    this.stompClient.connect({}, frame => {
      this.stompClient.subscribe('/topic/queue', (message) => {
        console.log('succes');
        if (message.body) {
          // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/send/message', {}, message);
    // $('#input').val('');
    // todo look for way to send uid so the message contains a username
  }
}
