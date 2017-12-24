import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenComponent } from './screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScreenComponent],
  exports: [ScreenComponent],
})
export class ScreenModule { }
