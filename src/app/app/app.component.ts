import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  
  ngOnInit() {

  if (environment.production) {
    (<any>window).ga('create', 'UA-114939227-1', 'auto');
    (<any>window).ga('set', 'page', this.router.url);
    (<any>window).ga('send', 'pageview');
  }

  this.router.events.subscribe(ev => {
    if (ev instanceof NavigationEnd) {
      if (environment.production) {
        (<any>window).ga('set', 'page', ev.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    }
  });
  }

}
