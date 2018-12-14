import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ScreenComponent],
  exports: [ScreenComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class ScreenModule { }
