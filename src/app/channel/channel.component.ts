import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ChannelsService } from './state';

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelComponent {
  constructor(
    private channel: ChannelsService,
    private snack: MatSnackBar,
  ) { }
  @Input() label: string = '';
  @Input() identity: number;
  @Input() active: boolean;
  @Input() state: boolean;

  toggleColor() {
    const { identity, state, active } = this;

    if (!active) {
      this.snack.open("You can't change states when sequences mode is enabled", null, { duration: 800 });
      return;
    };
    
    this.channel.toggle(identity, state);
  }
}
