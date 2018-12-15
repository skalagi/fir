import { Component, OnInit } from '@angular/core';

import { ChannelsQuery } from '../../../service/channel';
import { QueueQuery } from '../../../service/queue';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
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