import { Component, OnInit, Input } from '@angular/core';  import { Socket } from "../socket";  import { ActionService } from '../action.service';

@Component({   selector: 'channel',   templateUrl: './channel.component.html',   styleUrls: ['./channel.component.scss'] }) export class ChannelComponent {   constructor(private actions: ActionService) {}   @Input() public label: string = '';   @Input() public identity: number;   @Input() public active: boolean;   public state: boolean = false;    ngOnInit() {     this.actions.action('ChangeState', (value) => {       if (value.identity === this.identity) {
        this.state = value.state;
      }     });   }    toggleColor() {     const { identity, state, active } = this;      if (!active) return;      this.actions.change({       controller: 'ChangeState',       value: {         state: !state,         identity       }     });   } } 