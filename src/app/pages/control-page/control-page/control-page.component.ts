import { Component, OnInit } from '@angular/core';

import { ChannelsQuery } from '../../../service/channel';
import { QueueQuery } from '../../../service/queue';
import { ColorQuery } from '../../../service/color';
import { map, filter } from 'rxjs/operators';
import { ScreenQuery } from '../../../service/screen';

@Component({
  selector: 'control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {
  channels$;
  screen$;
  queue$;
  color$;

  constructor(
    private channelQ: ChannelsQuery,
    private colorQ: ColorQuery,
    private screenQ: ScreenQuery,
    private queueQ: QueueQuery,
  ) { }

  ngOnInit() {
    this.screen$ = this.screenQ.select(state => state.url);
    this.channels$ = this.channelQ.all$;
    this.queue$ = this.queueQ.show$;
    this.color$ = this.colorQ.select(state => state.currentColor)
      .pipe(filter(val => !!val), map(({ r, g, b }) => `rgb(${r}, ${g}, ${b})`));
  }
}
