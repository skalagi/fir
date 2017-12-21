import { MatButtonModule, MatButtonToggleModule, MatSlideToggleModule, MatListModule, MatSnackBarModule, MatIconModule, MatTooltipModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ChannelComponent } from './channel/channel.component';
import { ScreenComponent } from './screen/screen.component';
import { Socket } from "./socket";
import { StatisticsComponent } from './statistics/statistics.component';
import { ActionService } from './action.service';
import { SequencerComponent } from './sequencer/sequencer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ScreenComponent,
    StatisticsComponent,
    SequencerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ColorPickerModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [Socket, ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
