import { MatButtonModule, MatButtonToggleModule, MatSnackBarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ChannelComponent } from './channel/channel.component';
import { ScreenComponent } from './screen/screen.component';
import { Socket } from "./socket";

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [Socket],
  bootstrap: [AppComponent]
})
export class AppModule { }
