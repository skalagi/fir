import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../environments/environment';
import { FirComponent } from './fir/fir.component';
import { FirModule } from './fir/fir.module';

@NgModule({
  imports: [
    BrowserModule,
    FirModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  bootstrap: [FirComponent]
})
export class AppModule { }
