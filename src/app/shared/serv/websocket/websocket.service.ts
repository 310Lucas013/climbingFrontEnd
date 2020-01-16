import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({ providedIn: 'root' })

export class WebSocketService {
  // Our socket connection private socket;
  private serverUrl = 'http://ip:18090/stomp'; private stompClient;

  constructor() {}

  // Open connection with the back-end socket
  public connect() {
    const socket = new SockJS(this.serverUrl);
    const stompClient = Stomp.over(socket);
    return stompClient;
  }
}
