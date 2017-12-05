import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()
export class Socket {
  public messages: Subject<any> = new Subject();

  constructor(private snack: MatSnackBar) {
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
