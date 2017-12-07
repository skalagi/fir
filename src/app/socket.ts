import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
  
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import { environment } from '../environments/environment';

@Injectable()
export class Socket {
  private socket: $WebSocket;
  private actions: Map<string, Function> = new Map();

  constructor(private snack: MatSnackBar, http: HttpClient) {
    http.get(`${environment.uri}/getEndpoint`).subscribe((socket: any) => {
      this.socket = new $WebSocket(socket.endpoint);
      this.socket.setSend4Mode(WebSocketSendMode.Direct);

      this.socket.onMessage((event: any) => {
        const message = JSON.parse(event.data);
        this.snack.open(`recive ${message.action}`, null, { duration: 700 });

        /*
        if (error) {
          snack.open(error, 'rozumiem'); //TODO nicer error emblems
        }
        */

        this.actions.forEach((cb, action) => {
          if (action === message.action) {
            cb(message);
          }
        })
      });

      this.socket.onMessage(({ error }) => {
      });
    });
  }

  public action(name: string, cb: Function) {
    this.actions.set(name, cb);
  }

  public send(msg: any) {
    this.snack.open(`send ${ msg.controller }`, null, { duration: 700 });
    this.socket.send(msg);
  }
}
