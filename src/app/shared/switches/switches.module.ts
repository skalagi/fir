import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchesComponent } from './switches/switches.component';
import { MatButtonModule } from '@angular/material';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [SwitchesComponent, SwitchComponent],
  exports: [SwitchesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class SwitchesModule { }
