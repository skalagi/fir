import { Injectable } from '@angular/core';
import { ChannelsStore } from './channels.store';
import { ActionService } from '../../service/action/action.service';
import { HttpClient } from '@angular/common/http';
import { createChannel, Channel } from './channel.model';
import { guid } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ChannelsService {
  constructor(
    private store: ChannelsStore,
    private action: ActionService,
    private http: HttpClient,
  ) {
    this.init();
    this.updates();
  }

  private init() {
    this.store.set([
      { id: 0, state: false },
      { id: 1, state: false },
      { id: 2, state: false },
    ].map(createChannel));
  }

  private updates() {    
    this.action.action('channel')
      .subscribe(({ channel, state, status }) => {
        if (typeof channel !== 'number') {
          return;
        }

        if (status === 'current' || status === 'executed') {
          this.store.update(channel, { state });
        }
    });
  }

  toggle(channel, state) {
    this.action.change({
      controller: 'ChangeState', value: {
        state: !state,
        id: guid(),
        channel,
      }
    });
  }
}
