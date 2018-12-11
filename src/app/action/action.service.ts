import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Socket } from './socket';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actions: Set<any[]> = new Set();

  constructor(private socket: Socket) {
    socket.message$.subscribe(action => this.broadcast(action));

    this.action('ServerRestart', action => {
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
    this.actions.forEach(action => {
      const resolvedAction = this.resolveWhatAction(message);

      if (action[0] === resolvedAction) {
        if (message.controllerResponse ? message.controllerResponse === 'OK' : true) {
          action[1](message);
        }
      }
    })
  }

  public change(change) {
    this.socket.send(change);
  }

  public action(name: string, cb: Function) {
    this.actions.add([name, cb]);
  }
}
