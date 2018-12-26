import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { ScreenModule } from '../../shared/screen/screen.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,/*
    RouterModule.forChild([
      { path: '', component: HomepageComponent },
    ]),*/
    RouterModule,
    ScreenModule,
  ]
})
export class HomepageModule { }
