import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ActionService } from '../action.service';
import * as colors from 'color-name';

export interface Color {
  delay: number;
  rgb: number[];
}

@Component({
  selector: 'sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {
  constructor(private actions: ActionService) { }
  @Input() active: boolean;
  public colors: Color[] = [];
  public currentColor: string;
  public colorName: string;

  private color(rgb) {
    return { rgb, duration: null };
  }

  public setColor(i, rgbString) {
    this.colors[i].rgb = rgbString.slice(4, -1).split(',');
  }

  rgb(rgb) {
    return `rgb(${ rgb[0] }, ${ rgb[1] }, ${ rgb[2] })`
  }

  public addColor() {
    const color = Math.round(Math.random() * 148);
    const colorName = Object.keys(colors)[color];
    
    this.colors.push(this.color(colors[colorName]));
  }

  public removeColor(i) {
    console.log(i);
    if (this.colors.length > 1) {
      this.colors.pop();
    }
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
    this.addColor();     this.actions.action('ChangeColor', ({ rgb }) => {       let colorName;        Object.keys(colors).filter(color => {         const col = colors[color];          if (col[0] == color[0] && col[1] == rgb[1] && col[2] == rgb[2]) {           colorName = color;
        }       });        this.colorName = colorName;       this.currentColor = `rgb(${ rgb[0] }, ${ rgb[1] }, ${ rgb[2] })`;     });
  }
}
