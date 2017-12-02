import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent {
  public color = 'primary';
  private identity;
  private label;

  toggleColor() {
    this.color = this.color === ''
      ? 'primary' : '';
  }
}
