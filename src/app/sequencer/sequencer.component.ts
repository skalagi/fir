import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ActionService } from '../action.service';
import * as colors from 'color-name';

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


export interface Color {
  delay: number;
  hex: string;
}

@Component({
  selector: 'sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {
  constructor(private actions: ActionService) { }
  @Input() active;
  public colors: Color[] = [];
  public currentColor: string;
  public colorName: string;

  private color(hex) {
    return { hex, delay: null };
  }

  public setColor(i, hex) {
    this.colors[i].hex = hex;
  }

  public addColor() {    
    this.colors.push(this.color(`#${ Math.floor(Math.random()*16777215).toString(16) }`));
  }

  public remove(i) {
    console.log(i);
  }

  public send() {
    this.actions.change({
      controller: 'ChangeColor',
      value: {
        changes: this.colors,
      },
    });
  }

  ngOnInit() {
    this.addColor();     this.actions.action('ChangeColor', (color) => {       const rgb = hexToRgb(color.hex);       let colorName;        Object.keys(colors).filter(color => {         const col = colors[color];          if (col[0] == rgb.r && col[1] == rgb.g && col[2] == rgb.b) {           colorName = color;
        }       });        this.colorName = colorName;       this.currentColor = color.hex;     });
  }
}
