import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ChannelsService } from '../../../service/channel';

@Component({
  selector: 'switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesComponent {
  constructor(public channel: ChannelsService) { }
  @Input() channels;

  toggle({ identity, state }) {
    this.channel.toggle(identity, state);
  }
}
