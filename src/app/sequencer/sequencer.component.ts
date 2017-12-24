import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ActionService } from '../action.service';
import * as colors from 'color-name';
import { MatTabGroup } from '@angular/material';

export interface Color {
  duration: number;
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

  public backToSequence() {
    this.tabGroup.selectedIndex = 0;
  }

  public clear() {
    this.colors = [];
    this.addColor();
  }

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

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
    this.colors.splice(i, 1);
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
    this.addColor();     this.actions.action('ChangeColor', ({ rgb }) => {       let colorName;        Object.keys(colors).filter(color => {         const col = colors[color];          if (col[0] == rgb[0] && col[1] == rgb[1] && col[2] == rgb[2]) {           colorName = color;
        }       });        this.colorName = colorName;       this.currentColor = `rgb(${ rgb[0] }, ${ rgb[1] }, ${ rgb[2] })`;     });
  }
}
