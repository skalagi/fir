import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {

  channels = [
    { id: 0, state: true },
    { id: 1, state: true },
    { id: 2, state: true },
  ];

  queue = [
    { r: 230, g: 74, b: 25 },
    { channel: 0 },
    { r: 48, g: 63, b: 159 },
    { channel: 1 },
    { channel: 2, state: true },
    { r: 211, g: 47, b: 47 },
    { channel: 1, state: true },
    { r: 48, g: 63, b: 159 },
    { r: 230, g: 74, b: 25 },
    { channel: 2, state: true },
  ];

  queueDescription = [
    { icon: 'radio_button_unchecked', description: 'turn off lights part' },
    { icon: 'radio_button_checked', description: 'turn on lights part' },
    { icon: 'palette', description: 'led ring color change' },
  ];
}
