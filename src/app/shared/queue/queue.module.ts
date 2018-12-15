import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  declarations: [QueueComponent],
  exports: [QueueComponent],
  imports: [
    CommonModule
  ]
})
export class QueueModule { }
