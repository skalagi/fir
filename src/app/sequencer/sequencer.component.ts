import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

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
  public colors: Color[] = [];

  private color(hex) {
    return { hex, delay: null };
  }

  public setColor(i, hex) {
    this.colors[i].hex = hex;
  }

  public addColor() {    
    this.colors.push(this.color(`#${ Math.floor(Math.random()*16777215).toString(16) }`));
  }

  ngOnInit() {
    this.addColor();     this.actions.action('ChangeColor', (color) => {       this.currentColor = color.hex;     });
  }
}
