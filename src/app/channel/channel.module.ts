import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { ChannelComponent } from './channel.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  imports: [
    CommonModule,
    ActionModule,
    MatButtonModule,
  ],
  declarations: [ChannelComponent],
  exports: [ChannelComponent],
})
export class ChannelModule { }
