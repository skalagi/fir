import { MatButtonModule, MatButtonToggleModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ChannelComponent } from './channel/channel.component';
import { ScreenComponent } from './screen/screen.component';
import { Socket } from "./socket";
import { StatisticsComponent } from './statistics/statistics.component';
import { ActionService } from './action.service';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ScreenComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [Socket, ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
