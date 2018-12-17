import { Component } from '@angular/core';
import * as colors from 'material-colors';
import { ColorService } from '../../../service/color';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  pallette = colors;
  constructor(private led: ColorService) {}

  changeColor(color) {
    this.led.send(color);
  }
}
