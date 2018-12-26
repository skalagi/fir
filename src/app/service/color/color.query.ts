import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ColorStore, ColorState } from './color.store';

@Injectable({ providedIn: 'root' })
export class ColorQuery extends Query<ColorState> {

  constructor(protected store: ColorStore) {
    super(store);
  }

}
