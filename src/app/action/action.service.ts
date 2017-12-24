import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Socket } from './socket';

@Injectable()
export class ActionService {
  private actions: Set<any[]> = new Set();

  constructor(private socket: Socket) {
    socket.message$.subscribe(action => this.broadcast(action));

    this.action('ServerRestart', action => {
      this.socket.restart();
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

  public change(change) {
    this.socket.send(change);
  }

  public action(name: string, cb: Function) {
    this.actions.add([name, cb]);
  }
}
