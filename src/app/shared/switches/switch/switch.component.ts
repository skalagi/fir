import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChannelsService } from '../../../channel/state';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  constructor(private channel: ChannelsService) { }

  @Input() label: string = '';
  @Input() identity: number;
  @Input() state: boolean;

  toggleColor() {
    const { identity, state } = this;
    
    this.channel.toggle(identity, state);
  }
}
