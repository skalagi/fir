import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { FirComponent } from './fir/fir.component';
import { FirModule } from './fir/fir.module';
import { akitaDevtools } from '@datorama/akita';
import { ChannelsComponent } from './channels/channels.component';

if (!environment.production) {
  akitaDevtools();
}

@NgModule({
  imports: [
    BrowserModule,
    FirModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  bootstrap: [FirComponent],
})
export class AppModule { }
