import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatCardModule, MatTabsModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { SequencerComponent } from './sequencer.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    ActionModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  declarations: [SequencerComponent],
  exports: [SequencerComponent],
})
export class SequencerModule { }
