import { Component, AfterViewInit } from '@angular/core';
import { Socket } from '../service/socket/socket';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public networkStatus = 'finding way to the house';
  constructor(private socket: Socket) {}

  ngAfterViewInit() {
    this.socket.message$.pipe(take(1)).subscribe(() => {
      this.networkStatus = 'connection established';
    });
  }

}
