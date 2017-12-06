import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class Socket {
  public messages: Subject<any> = new Subject();

  constructor(private snack: MatSnackBar, http: HttpClient) {
    http.get(`${environment.uri}/getEndpoint`).subscribe(socketUri => {
      console.log(socketUri);
    });

    this.messages.filter(({ error }) => error)
      .subscribe(({ error }) => {
        snack.open(error, 'rozumiem'); //nicer error emblems
      });
  }

  public send(msg: any) {
    if (msg.controller === 'ChangeState') {
      this.messages.next({ ...msg, controllerResponse: 'OK' });
    }

    this.snack.open(msg.controller, null, { duration: 700 });
  }
}
