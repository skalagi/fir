import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface QueueState {
  value: any[];
}

export function createInitialState(): QueueState {
  return {
    value: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'queue' })
export class QueueStore extends Store<QueueState> {

  constructor() {
    super(createInitialState());
  }

}

