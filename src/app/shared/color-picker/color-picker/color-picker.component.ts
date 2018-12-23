import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ColorService } from '../../../service/color';
import * as hexToRgb from 'hex-rgb';

import { pallette } from './pallette';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  constructor(private led: ColorService) { }
  pallette = pallette;
  @Input() color;

  ngOnInit() {
    console.log(this.color);
  }

  changeColor(color) {
    this.led.send(color);
  }

  get thumbPosition() {
    let i = 0;

    if (this.color) {
      i = this.pallette.findIndex(color => {
        if (!color) {
          return false;
        }

        const { red, green, blue } = hexToRgb(color.hex);
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
