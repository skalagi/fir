import { Injectable } from '@angular/core';

import { Socket } from '../socket/socket';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private action$ = new Subject();

  constructor(private socket: Socket) {
    socket.message$.subscribe(action => this.broadcast(action));

    this.action('ServerRestart').subscribe(() => {
      this.socket.restart();
    });
  }

  private resolveWhatAction({ channel, queue, r }) {
    if (typeof queue === 'object') {
      return 'queue';
    } else if (typeof r === 'string' || typeof r === 'number') {
      return 'color';
    } else if (typeof channel === 'number') {
      return 'channel';
    }

    return null;
  }

  private broadcast(message) {
    this.action$.next(message);
  }

  public change(change) {
    this.socket.send(change);
  }

  public action(...names: string[]) {
    return this.action$.asObservable()
      .pipe(filter((message: any) =>
        names.some(name => 
          this.resolveWhatAction(message) === name
        )),
      );
  }
}
