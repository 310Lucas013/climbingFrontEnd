import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountcompetitionService} from '../shared/serv/accountcompetition/accountcompetition.service';
import {AccountCompetition} from '../shared/models/AccountCompetition';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  id: number;
  serverUrl = 'http://localhost:8093/socket';
  stompClient;
  participants: AccountCompetition[];
  constructor(private route: ActivatedRoute, private service: AccountcompetitionService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    this.service.getAccountCompetitionsById(this.id).subscribe(data => {
      console.log(data);
      this.participants = data;
      console.log(this.participants);
    });
  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    // const that = this;
    this.stompClient.connect({}, frame => {
      this.stompClient.heartbeat.outgoing = 20000;
      this.stompClient.heartbeat.incoming = 0;
      console.log(frame);
      this.stompClient.subscribe('/topic/send', message =>  {
        console.log('succes');
        if (message.body) {
          console.log(message);
          console.log(JSON.parse(message.body));
          this.participants = JSON.parse(message.body) as AccountCompetition[];
          console.log(this.participants);
          // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          // console.log(JSON.parse(message.body).content);

        }
      });

      this.stompClient.subscribe('/topic/error', message =>  {
        console.log('error');
        if (message.body) {
          console.log(message);
          // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          console.log(JSON.parse(message.body).content);
        }
      });

      // this.stompClient.send('/app/send', {}, 'body');
    });
  }

}
