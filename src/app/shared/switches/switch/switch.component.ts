import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

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
    return ['white', 'red', 'blue'][this.identity];
  }

  toggleColor() {
    const { identity, state } = this;
    this.toggle.next({ identity, state });
  }
}
