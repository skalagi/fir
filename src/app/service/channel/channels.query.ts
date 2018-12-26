import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ChannelsStore, ChannelsState } from './channels.store';
import { Channel } from './channel.model';
import { ChannelsService } from './channels.service';

@Injectable({ providedIn: 'root' })
export class ChannelsQuery extends QueryEntity<ChannelsState, Channel> {
  all$ = this.selectAll();

  constructor(protected store: ChannelsStore, protected service: ChannelsService) {
    super(store);
  }

}
