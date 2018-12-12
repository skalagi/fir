import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuePreviewComponent } from '../queue-preview/queue-preview.component';

@NgModule({
  declarations: [QueuePreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [QueuePreviewComponent],
})
export class QueueModule { }
