import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Socket } from './socket';
import { Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

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

  private resolveWhatAction({ channel, queue }) {
    if (channel !== undefined) {
      return 'channel';
    } else if (queue !== undefined) {
      return 'queue';
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
