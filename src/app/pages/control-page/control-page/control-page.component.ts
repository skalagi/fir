import { Component, OnInit } from '@angular/core';

import { ChannelsQuery } from '../../../service/channel';
import { QueueQuery } from '../../../service/queue';
import { ColorQuery } from '../../../service/color';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {
  channels$;
  queue$;
  color$;

  constructor(
    private channelQ: ChannelsQuery,
    private colorQ: ColorQuery,
    private queueQ: QueueQuery,
  ) { }

  ngOnInit() {
    this.channels$ = this.channelQ.all$;
    this.queue$ = this.queueQ.show$;
    this.color$ = this.colorQ.select(state => state.currentColor)
      .pipe(filter(val => !!val), map(({ r, g, b }) => `rgb(${r}, ${g}, ${b})`));
  }
}
