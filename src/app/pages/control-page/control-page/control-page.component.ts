import { Component, OnInit } from '@angular/core';

import { ChannelsQuery } from '../../../service/channel';
import { QueueQuery } from '../../../service/queue';

@Component({
  selector: 'control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {
  channels$;
  queue$;

  constructor(
    private channelQ: ChannelsQuery,
    private queueQ: QueueQuery,
  ) { }

  ngOnInit() {
    this.channels$ = this.channelQ.all$;
    this.queue$ = this.queueQ.show$;
  }
}
