import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  channels = [
    { id: 0, state: true },
    { id: 1, state: true },
    { id: 2, state: true },
  ];

  queue = [
    { r: 255, g: 0, b: 0 },
    { channel: 0 },
    { r: 0, g: 255, b: 0 },
    { channel: 1 },
    { channel: 2, state: true },
    { r: 0, g: 255, b: 0 },
    { channel: 1, state: true },
    { r: 0, g: 0, b: 255 },
    { r: 0, g: 255, b: 0 },
    { channel: 2, state: true },
  ];

  queueDescription = [
    { icon: 'radio_button_unchecked', description: 'turn off lights part' },
    { icon: 'radio_button_checked', description: 'turn on lights part' },
    { icon: 'palette', description: 'led ring color change' },
  ];
}