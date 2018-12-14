import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { FirModule } from './fir/fir.module';
import { akitaDevtools } from '@datorama/akita';
import { AppComponent } from './app/app.component';

import { RouterModule } from '@angular/router';

if (!environment.production) {
  akitaDevtools();
}

const routes = [
  { path: '', loadChildren: './pages/homepage/homepage.module#HomepageModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    FirModule,
    RouterModule.forRoot(routes),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
