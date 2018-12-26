import { Injectable } from '@angular/core';
import { QueueStore } from './queue.store';
import { ActionService } from '../action/action.service';

@Injectable({ providedIn: 'root' })
export class QueueService {

  constructor(
    private store: QueueStore,
    private actions: ActionService,
  ) {
    this.actions.action('channel', 'queue', 'color')
      .subscribe((message) => {
        const { queue, status } = message;

        if (queue) {
          this.store.update({ value: queue });
        }

        if (status) {
          if (status === 'executed') {
            this.store.update(({ value: value }) => {
              return {
                value: value
                  .filter(item => item.id !== message.id),
              };
            });
          } else if (status === 'added') {
            this.store.update(({ value }) => {
              return { value: [...value, message] };
            });
          }
        }
      });
  }

}
