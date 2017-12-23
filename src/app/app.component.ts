import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sequences = false;
  public channels: any[] = [];
  public columns = 4;

  constructor(private http: HttpClient, private media: ObservableMedia) {
    media.subscribe(({ mqAlias }) => {
      if (mqAlias == 'sm' || mqAlias == 'xs') {
        this.columns = 2;
      } else {
        this.columns = 4;
      }
    });
  }

  ngOnInit() {     this.http.get(`${ environment.uri }/getChannels`).subscribe((channels: any[]) => this.channels = channels);
}
}
