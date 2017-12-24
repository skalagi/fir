import { MatButtonModule, MatButtonToggleModule, MatSlideToggleModule, MatListModule, MatSnackBarModule, MatIconModule, MatTooltipModule, MatInputModule, MatCardModule, MatProgressBar, MatProgressBarModule, MatToolbarModule, MatGridListModule, MatSidenavModule, MatProgressSpinnerModule, MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SequencerModule } from './sequencer/sequencer.module';
import { ChannelModule } from './channel/channel.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ScreenModule } from './screen/screen.module';

export const materialModules = [
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatTabsModule,
  FlexLayoutModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ...materialModules,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScreenModule,
    StatisticsModule,
    ChannelModule,
    SequencerModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
