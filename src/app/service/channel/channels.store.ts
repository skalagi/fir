import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Channel } from './channel.model';

export interface ChannelsState extends EntityState<Channel> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'channels' })
export class ChannelsStore extends EntityStore<ChannelsState, Channel> {

  constructor() {
    super();
  }

}

