import { Component, OnInit, Input } from '@angular/core'; 
import { ActionService } from '../action/action.service';
import { MatSnackBar } from '@angular/material';

@Component({   selector: 'channel',   templateUrl: './channel.component.html',   styleUrls: ['./channel.component.scss'] }) export class ChannelComponent {   constructor(private actions: ActionService, private snack: MatSnackBar) {}   @Input() public label: string = '';   @Input() public identity: number;   @Input() public active: boolean;   public state: boolean = false;    ngOnInit() {     this.actions.action('ChangeState', (value) => {       if (value.identity === this.identity) {
        this.state = value.state;
      }     });   }    toggleColor() {     const { identity, state, active } = this;      if (!active) {       this.snack.open("You can't change states when sequences mode is enabled", null, { duration: 400 });       return;     };      this.actions.change({       controller: 'ChangeState',       value: {         state: !state,         identity       }     });   } } 