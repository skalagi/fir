import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { ScreenModule } from '../../shared/screen/screen.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    ScreenModule,
    RouterModule.forChild([
      { path: '', component: HomepageComponent },
    ]),
  ]
})
export class HomepageModule { }
