import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatProgressBarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,

  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { StatisticsModule } from '../statistics/statistics.module';
import { SequencerModule } from '../sequencer/sequencer.module';
import { ChannelModule } from '../channel/channel.module';
import { ScreenModule } from '../screen/screen.module';
import { FirComponent } from './fir.component';
import { QueueModule } from '../queue/queue.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StatisticsModule,
    SequencerModule,
    ChannelModule,
    QueueModule,
    ScreenModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    FormsModule,
  ],
  declarations: [FirComponent],
  exports: [FirComponent],
})
export class FirModule { }
