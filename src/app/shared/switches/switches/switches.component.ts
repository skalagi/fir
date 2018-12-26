import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesComponent {
  @Output() channelToggled = new EventEmitter();
  @Input() channels;

  toggle({ identity, state }) {
    this.channelToggled.next({ identity, state })
  }
}
