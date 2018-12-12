import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatCardModule, MatInputModule, MatTabsModule, MatToolbarModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { SequencerComponent } from './sequencer.component';
import { ActionModule } from '../action/action.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ActionModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
  ],
  declarations: [SequencerComponent],
  exports: [SequencerComponent],
})
export class SequencerModule { }
