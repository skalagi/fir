import { Component, HostBinding, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDrawer } from '@angular/material/sidenav';
import { take } from 'rxjs/operators';
import * as colors from 'color-name';

import { Socket } from '../action/socket';
import { ActionService } from '../action/action.service';
import { ChannelsQuery } from '../channel/state';

@Component({
  selector: 'fir',
  templateUrl: './fir.component.html',
  styleUrls: ['./fir.component.scss'],
})
export class FirComponent {
  public sequences = false;
  public live = true;
  public networkStatus = 'finding way to the house';
  public channels$;
  public drawerMode = 'side';
  public currentColor: string;
  public colorName: string;
  public columns = 4;
  public mq;

  @HostBinding('style.margin') hostMargin;
  @HostBinding('style.width') hostWidth;

  @ViewChild(MatDrawer) public drawer: MatDrawer;

  constructor(
    private channelQ: ChannelsQuery,
    private media: ObservableMedia,
    private socket: Socket,
    private actions: ActionService
  ) { }

  ngAfterViewInit() {
    this.socket.message$.pipe(take(1)).subscribe(() => {
      this.networkStatus = 'connection established';
    });
  }

  ngOnInit() {
    this.channels$ = this.channelQ.all$;

    this.actions.action('ChangeColor', ({ rgb }) => {
      let colorName;

      Object.keys(colors).filter(color => {
        const col = colors[color];

        if (col[0] == rgb[0] && col[1] == rgb[1] && col[2] == rgb[2]) {
          colorName = color;
        }
      }); 

      this.currentColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      this.colorName = colorName;
    });

    this.media.subscribe(({ mqAlias }) => {
      this.columns = mqAlias == 'xs' ? 2 : 4;

      if (mqAlias == 'sm' || mqAlias == 'xs') {
        this.drawerMode = 'push';
        this.hostWidth = '100%';
        this.hostMargin = '0 auto';
      } else {
        this.drawerMode = 'side';
        this.hostMargin = 'auto';
        this.hostWidth = '';
      }
    });
  }
}
