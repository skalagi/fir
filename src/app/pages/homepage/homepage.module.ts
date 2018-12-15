import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { ScreenModule } from '../../shared/screen/screen.module';
import { SwitchesModule } from '../../shared/switches/switches.module';
import { QueueModule } from '../../shared/queue/queue.module';
import { ColorPickerModule } from '../../shared/color-picker/color-picker.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: HomepageComponent },
    ]),
    ColorPickerModule,
    SwitchesModule,
    ScreenModule,
    QueueModule,
  ]
})
export class HomepageModule { }
