import { Component, Input } from '@angular/core';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
  @Input() values;
  colors = ['white', '#B71C1C', '#2979FF'];
}
