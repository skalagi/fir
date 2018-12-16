import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { akitaDevtools } from '@datorama/akita';
import { AppComponent } from './app/app.component';

import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

if (!environment.production) {
  akitaDevtools();
}

const routes = [
  { path: '', loadChildren: './pages/homepage/homepage.module#HomepageModule' },
  { path: 'christmas', loadChildren: './pages/control-page/control-page.module#ControlPageModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatSnackBarModule,
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
