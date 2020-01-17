import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({ providedIn: 'root' })

export class WebSocketService {
  // Our socket connection private socket;
  private serverUrl = 'ws://localhost:8080/greeting'; private stompClient;

  constructor() {}

  // Open connection with the back-end socket
  public connect() {
    // const socket = new SockJS(this.serverUrl);
    const socket = new WebSocket(this.serverUrl);
    const stompClient = Stomp.over(socket);
    console.log(stompClient);
    return stompClient;
  }
}
