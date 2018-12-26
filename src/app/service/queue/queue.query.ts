import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { QueueStore, QueueState } from './queue.store';
import { QueueService } from './queue.service';

@Injectable({ providedIn: 'root' })
export class QueueQuery extends Query<QueueState> {
  show$ = this.select(state => state);

  constructor(protected store: QueueStore, protected service: QueueService) {
    super(store);
  }

}
