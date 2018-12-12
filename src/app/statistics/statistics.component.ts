import { Component, OnInit } from '@angular/core';

import { ActionService } from '../action/action.service';

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
    this.actions.action('UpdateStats').subscribe((stats) => {
      Object.assign(this, stats);
    });

    this.actions.action('ChangeState').subscribe(() => {
      this.totalChanges++;
      this.todayChanges++;
    });
  }

}
