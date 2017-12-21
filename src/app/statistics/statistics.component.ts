import { Component, OnInit } from '@angular/core';
import { Socket } from "../socket";
import { ActionService } from '../action.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public currentOnline: number;
  public todayVisits: number;
  public totalChanges: number;
  public totalVisits: number;
  public todayChanges: number;

  constructor(private actions: ActionService) { }

  ngOnInit() {
    this.actions.action('UpdateStats', (stats) => {
      Object.assign(this, stats);
    });

    this.actions.action('ChangeState', () => {
      this.totalChanges++;
      this.todayChanges++;
    });
  }

}
