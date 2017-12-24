import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule } from '@angular/material';

import { StatisticsComponent } from './statistics.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  imports: [
    CommonModule,
    ActionModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: [StatisticsComponent],
  exports: [StatisticsComponent],
})
export class StatisticsModule { }
