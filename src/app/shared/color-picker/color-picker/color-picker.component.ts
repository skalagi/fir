import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as colors from 'material-colors';
import { ColorService } from '../../../service/color';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  constructor(private led: ColorService) {}
  pallette = colors;
  @Input() color;

  changeColor(color) {
    this.led.send(color);
  }
}
