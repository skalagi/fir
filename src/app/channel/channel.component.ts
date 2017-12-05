import { Component, OnInit, Input } from '@angular/core';  import { Socket } from "../socket";

@Component({   selector: 'channel',   templateUrl: './channel.component.html',   styleUrls: ['./channel.component.scss'] }) export class ChannelComponent {   constructor(private socket: Socket) {}   private state: boolean = false;    @Input()   private identity: number;      public label: string = 'wesolych swiat';    ngOnInit() {
    this.socket.messages.subscribe(ev => {
      if (ev.controller === 'ChangeState'
        && ev.controllerResponse === 'OK'
        && ev.value.identity === this.identity
        ) {
        this.state = ev.value.state;
      }
    });
  }    toggleColor() {     const { identity, state } = this;      this.socket.send({       controller: 'ChangeState',       value: {         state: !state,
        identity
      }     });   } } 