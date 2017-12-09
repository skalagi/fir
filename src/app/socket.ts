import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
  
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import { environment } from '../environments/environment';

@Injectable()
export class Socket {
  private socket: $WebSocket;
  private actions: Set<any[]> = new Set();

  constructor(private snack: MatSnackBar, http: HttpClient) {
    http.get(`${environment.uri}/getEndpoint`).subscribe((socket: any) => {
      this.socket = new $WebSocket(socket.endpoint);
      this.socket.setSend4Mode(WebSocketSendMode.Direct);

      this.socket.onMessage((event: any) => {
        const message = JSON.parse(event.data);
        this.snack.open(`recive ${message.action}`, null, { duration: 700 });
       
        if (message.error) {
          snack.open(message.error.reason + '', 'rozumiem', { panelClass: 'warn' }); 
        } else {
          this.broadcast(message);
        }
      });
    });
  }

  private broadcast(message) {
    this.actions.forEach(action => {
      if (action[0] === message.action) {
        if (message.controllerResponse ? message.controllerResponse === 'OK' : true) {
          action[1](message.value);
        }
      }
    })
  }

  public action(name: string, cb: Function) {
    this.actions.add([name, cb]);
  }

  public send(msg: any) {
    this.snack.open(`send ${ msg.controller }`, null, { duration: 700 });
    this.socket.send(msg);
  }
}
