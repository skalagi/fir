import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material';
import * as converter from 'hex-rgb';
import * as colors from 'color-name';
import * as materialColors from 'material-colors';

import { ActionService } from '../action/action.service';
import { guid } from '@datorama/akita';

@Component({
  selector: 'sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent {
  constructor(private actions: ActionService) { }
  color = { r: 0, g: 0, b: 0 };
  colors = materialColors;
  @Input() colorName;

  public send(color) {
    const { red: r, green: g, blue: b } = converter(color.value['600']);

    this.actions.change({
      controller: 'ChangeState',
      value: {
        id: guid(),
        r, g, b,
      },
    });
  }
}
