import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private router: Router) { }
  url$;
  
  ngOnInit() {
    this.url$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.url)
    );
  }
}