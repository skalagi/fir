import { Component, OnInit } from '@angular/core';
import { QueueQuery } from '../queue/state';

@Component({
  selector: 'queue-preview',
  templateUrl: './queue-preview.component.html',
  styleUrls: ['./queue-preview.component.scss']
})
export class QueuePreviewComponent implements OnInit {
  queue$;

  constructor(private queueQ: QueueQuery) { }

  ngOnInit() {
    this.queue$ = this.queueQ.show$;
  }

}
