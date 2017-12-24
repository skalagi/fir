import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';

import { ChannelComponent } from './channel.component';
import { ActionModule } from '../action/action.module';

@NgModule({
  imports: [
    CommonModule,
    ActionModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  declarations: [ChannelComponent],
  exports: [ChannelComponent],
})
export class ChannelModule { }
