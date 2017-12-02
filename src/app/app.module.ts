import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ChannelComponent } from './channel/channel.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    MatButtonToggleModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
