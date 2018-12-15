import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [ColorPickerComponent],
  exports: [ColorPickerComponent],
  imports: [
    CommonModule
  ]
})
export class ColorPickerModule { }
