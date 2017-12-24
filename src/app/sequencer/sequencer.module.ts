import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatCardModule, MatInputModule, MatTabsModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { SequencerComponent } from './sequencer.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    ActionModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
  ],
  declarations: [SequencerComponent],
  exports: [SequencerComponent],
})
export class SequencerModule { }
