import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ActionService } from '../action.service';

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
  constructor(private actions: ActionService) {}
  public colors: Color[] = [];
  public currentColor: string;

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
    this.addColor();     this.actions.action('ChangeColor', (color) => {       this.currentColor = color.hex;     });
  }
}
