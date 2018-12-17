import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface ColorState {
  currentColor: Color;
}

export function createInitialState(): ColorState {
  return {
    currentColor: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'color' })
export class ColorStore extends Store<ColorState> {

  constructor() {
    super(createInitialState());
  }

}

