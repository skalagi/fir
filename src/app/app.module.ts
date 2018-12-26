import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { akitaDevtools } from '@datorama/akita';
import { AppComponent } from './app/app.component';

import { RouterModule } from '@angular/router';
import { MatSnackBarModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HomepageModule } from './pages/homepage/homepage.module';

if (!environment.production) {
  akitaDevtools();
}

const routes = [
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'christmas', loadChildren: './pages/control-page/control-page.module#ControlPageModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    HomepageModule,
    MatSnackBarModule,
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule { }
