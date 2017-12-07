import { Component, OnInit } from '@angular/core';
import { Socket } from "../socket";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.action('UpdateStats', (stats) => {
      Object.assign(this, stats);
    });
  }

}
