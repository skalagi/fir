import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ScreenComponent } from './screen.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [ScreenComponent],
  exports: [ScreenComponent],
})
export class ScreenModule { }
