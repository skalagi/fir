import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuePreviewComponent } from '../queue-preview/queue-preview.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [QueuePreviewComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [QueuePreviewComponent],
})
export class QueueModule { }
