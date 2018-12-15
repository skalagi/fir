import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue/queue.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [QueueComponent],
  exports: [QueueComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class QueueModule { }
