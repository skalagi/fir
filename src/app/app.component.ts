import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sequences: boolean = false;
  public channels: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {     this.http.get(`${ environment.uri }/getChannels`).subscribe((channels: any[]) => this.channels = channels);
}
}
