import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { ColorStore } from './color.store';

import * as converter from 'hex-rgb';

import { ActionService } from '../action/action.service';

@Injectable({ providedIn: 'root' })
export class ColorService {

  constructor(private store: ColorStore, private actions: ActionService) {
    this.actions.action('color').subscribe(({ r, g, b, status }) => {
      if (status === 'current' || status === 'executed') {
        this.store.setState(state => ({ currentColor: { r, g, b } }));
      }
    });
  }

  public send(color) {
    const { red: r, green: g, blue: b } = converter(color);

    this.actions.change({
      controller: 'ChangeColor',
      value: {
        id: guid(),
        r, g, b,
      },
    });
  }

}
