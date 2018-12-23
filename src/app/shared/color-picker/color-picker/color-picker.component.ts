import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as colors from 'material-colors';
import { ColorService } from '../../../service/color';
import * as hexToRgb from 'hex-rgb';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  constructor(private led: ColorService) { }
  @Input() color;

  get pallette() {
    return Object.keys(colors)
      .map(colorKey => colors[colorKey])
      .filter(color => color['500']);
  }

  changeColor(color) {
    this.led.send(color);
  }

  get thumbPosition() {
    let i = 0;

    if (this.color) {
      i = this.pallette.findIndex(color => {
        if (!color['500']) {
          return false;
        }

        const { red, green, blue } = hexToRgb(color['500']);
        return `rgb(${ red }, ${ green }, ${ blue })` === this.color;
      }) + 1;
    } 

    if (i === 0) {
      return false;
    }

    if (i === 19) {
      i = 18;
    }

    return `rotate(${ 20 * i + 45 }deg)`;
  }
}
