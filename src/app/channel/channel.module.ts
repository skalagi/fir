import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatSnackBarModule, MatGridListModule } from '@angular/material';

import { ChannelComponent } from './channel.component';
import { ActionModule } from '../action/action.module';
import { ChannelsComponent } from '../channels/channels.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ActionModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  declarations: [ChannelComponent, ChannelsComponent],
  exports: [ChannelsComponent],
})
export class ChannelModule { }
