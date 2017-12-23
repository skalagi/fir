import { Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sequences = false;
  public channels: any[] = [];
  public drawerMode = 'side';
  public columns = 4;
  public mq;

  @HostBinding('style.margin') hostMargin;
  @HostBinding('style.width') hostWidth;

  constructor(private http: HttpClient, private media: ObservableMedia) {
    media.subscribe(({ mqAlias }) => {
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

  ngOnInit() {     this.http.get(`${ environment.uri }/getChannels`).subscribe((channels: any[]) => this.channels = channels);
}
}
