import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Socket {
  public messages: Subject<any> = new Subject();

  public send(msg: any) {
    if (msg.controller === 'ChangeState') {
      this.messages.next({ ...msg, controllerResponse: 'OK' });
    }

    console.log(msg);
  }
}
