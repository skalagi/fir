import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { SwitchesModule } from '../../shared/switches/switches.module';
import { QueueModule } from '../../shared/queue/queue.module';
import { ColorPickerModule } from '../../shared/color-picker/color-picker.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ColorPickerModule,
    SwitchesModule,
    QueueModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
