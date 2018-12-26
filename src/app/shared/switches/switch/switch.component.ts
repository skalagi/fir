import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { channelColors } from '../../../service/channel';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() label: string = '';
  @Input() identity: number;
  @Input() state: boolean;

  @Output() toggle = new EventEmitter;

  get color() {
    return channelColors[this.identity];
  }

  toggleColor() {
    const { identity, state } = this;
    this.toggle.next({ identity, state });
  }
}
