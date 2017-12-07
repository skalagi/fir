import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
  
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import { environment } from '../environments/environment';

@Injectable()
export class Socket {
  private socket;

  constructor(private snack: MatSnackBar, http: HttpClient) {
    http.get(`${environment.uri}/getEndpoint`).subscribe((socket: any) => {
      this.socket = new $WebSocket(socket.endpoint);
      this.socket.onMessage((event: any) => console.log(JSON.parse(event.data)));

      this.socket.onMessage(({ error }) => {
        snack.open(error, 'rozumiem'); //TODO nicer error emblems
      });
    });
  }

  public send(msg: any) {
    this.snack.open(msg.controller, null, { duration: 700 });
    this.socket.send(msg);
  }
}
