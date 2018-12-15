import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesComponent {
  @Input() channels;
}
