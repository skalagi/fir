import { Component, Input } from '@angular/core';
import { channelColors } from '../../../service/channel';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
  colors = channelColors;
  @Input() values;
}
