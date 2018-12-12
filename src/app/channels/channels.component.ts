import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelsComponent {
  @Input() channels;
}
