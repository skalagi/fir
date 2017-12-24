import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material';
import * as colors from 'color-name';

import { ActionService } from '../action/action.service';

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

  public backToSequence() {
    this.tabGroup.selectedIndex = 0;
  }

  public clear() {
    this.colors = [];
    this.addColor();
  }

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  private color(rgb) {
    return { rgb, duration: 1 };
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

    if (this.tabGroup) {
      this.tabGroup.selectedIndex = this.colors.length;
    }
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
    this.addColor();
  }
}
