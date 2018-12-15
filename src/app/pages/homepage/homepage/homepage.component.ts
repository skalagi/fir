import { Component, OnInit } from '@angular/core';
import { ChannelsQuery } from '../../../channel/state';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  channels$;

  constructor(private channelQ: ChannelsQuery) { }

  ngOnInit() {
    this.channels$ = this.channelQ.all$;
  }

}
