import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScreenQuery } from '../../../service/screen';
import { map } from 'rxjs/operators';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenComponent implements OnInit {
  src$;

  constructor(private dom: DomSanitizer,
    private screenQ: ScreenQuery) { }

  ngOnInit() {
    this.src$ = this.screenQ
      .select(state => state.url)
      .pipe(map(url => {
        return this.dom.bypassSecurityTrustResourceUrl(`
          http://www.youtube.com/embed/${ url }?autoplay=1&controls=0&mute=1&showinfo=0&modestbranding=1
        `);
      }));
  }

}
