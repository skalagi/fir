import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ColorState {
  key: string;
}

export function createInitialState(): ColorState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'color' })
export class ColorStore extends Store<ColorState> {

  constructor() {
    super(createInitialState());
  }

}

