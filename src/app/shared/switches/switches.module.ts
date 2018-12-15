import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
  declarations: [SwitchesComponent],
  exports: [SwitchesComponent],
  imports: [
    CommonModule
  ]
})
export class SwitchesModule { }
