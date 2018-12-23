import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
  
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import { environment } from '../../../environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Socket {
  private socket: $WebSocket;
  public message$: Subject<any> = new Subject();

  constructor(private snack: MatSnackBar, private http: HttpClient) {
    this.init();
  }

  private init() {
    this.http.get(`${environment.uri}?ctrl=getEndpoint`).subscribe((socket: any) => {
      this.socket = new $WebSocket(socket.endpoint);
      this.socket.setSend4Mode(WebSocketSendMode.Direct);

      this.socket.onMessage((event: any) => {
        const message = JSON.parse(event.data);

        if (message.reason) {
          this.snack.open(message.reason + '', 'got it', { panelClass: 'warn' });
        } else {
          this.message$.next(message);
        }
      });
    });
  }

  public restart() {
    this.snack.open(`server is about to restart connection in ${environment.restartDelay / 1000}s`, null, { panelClass: 'accent' });
    setTimeout(() => this.init(), environment.restartDelay);
  }

  public send(msg: any) {
    this.socket.send(msg);
  }
}
