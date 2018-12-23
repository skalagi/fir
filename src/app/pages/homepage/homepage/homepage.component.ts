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

  queue = [
    { icon: 'radio_button_unchecked', description: 'turn off lights part' },
    { icon: 'radio_button_checked', description: 'turn on lights part' },
    { icon: 'palette', description: 'led ring color change' },
  ];

  constructor(
    private channelQ: ChannelsQuery,
    private queueQ: QueueQuery,
  ) { }

  ngOnInit() {
    this.channels$ = this.channelQ.all$;
    this.queue$ = this.queueQ.show$;
  }

}