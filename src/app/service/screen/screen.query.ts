import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ScreenStore, ScreenState } from './screen.store';
import { ScreenService } from './screen.service';

@Injectable({ providedIn: 'root' })
export class ScreenQuery extends Query<ScreenState> {

  constructor(protected store: ScreenStore, private service: ScreenService) {
    super(store);
  }

}
