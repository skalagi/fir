import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ControlPageRoutingModule } from './control-page-routing.module';
import { ControlPageComponent } from './control-page/control-page.component';

import { ColorPickerModule } from '../../shared/color-picker/color-picker.module';
import { SwitchesModule } from '../../shared/switches/switches.module';
import { ScreenModule } from '../../shared/screen/screen.module';
import { QueueModule } from '../../shared/queue/queue.module';

@NgModule({
  declarations: [ControlPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ControlPageRoutingModule,
    ColorPickerModule,
    SwitchesModule,
    ScreenModule,
    QueueModule,
  ]
})
export class ControlPageModule { }
