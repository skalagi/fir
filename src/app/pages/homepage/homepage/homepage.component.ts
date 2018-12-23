import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  channels = [];
  queue = [];

  queueDescription = [
    { icon: 'radio_button_unchecked', description: 'turn off lights part' },
    { icon: 'radio_button_checked', description: 'turn on lights part' },
    { icon: 'palette', description: 'led ring color change' },
  ];
}