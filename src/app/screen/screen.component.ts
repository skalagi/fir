import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  public youtubeId;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  public youtubeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.youtubeId}?autoplay=1`);
  }

  ngOnInit() {
    this.http.get(environment.uri + '/getStream').subscribe((stream: any) => {
      if (stream.type == 'yt') {
        this.youtubeId = stream.value;
      }
    });
  }
}
