import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ScreenState {
  url: string;
}

export function createInitialState(): ScreenState {
  return {
    url: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'screen' })
export class ScreenStore extends Store<ScreenState> {

  constructor() {
    super(createInitialState());
  }

}

