import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
  
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import { environment } from '../../environments/environment';
import { take } from 'rxjs/operators';

@Injectable()
export class Socket {
  private socket: $WebSocket;
  public message$: Subject<any> = new Subject();

  constructor(private snack: MatSnackBar, private http: HttpClient) {
    this.init();
  }

  private init() {
    this.message$.pipe(take(1)).subscribe(() => {
      document.body.style.backgroundImage = 'url("assets/winter.jpg")';
    });

    this.http.get(`${environment.uri}/getEndpoint`).subscribe((socket: any) => {
      this.socket = new $WebSocket(socket.endpoint);
      this.socket.setSend4Mode(WebSocketSendMode.Direct);

      this.socket.onMessage((event: any) => {
        const message = JSON.parse(event.data);

        if (message.error) {
          this.snack.open(message.error.reason + '', 'got it', { panelClass: 'warn' });
        } else {
          this.message$.next(message);
        }
      });
    });
  }

  public restart() {
    setTimeout(() => this.init(), environment.restartDelay);
  }

  public send(msg: any) {
    this.socket.send(msg);
  }
}
