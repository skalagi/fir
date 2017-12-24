import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";

import { Socket } from './socket';

describe('Socket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Socket],
      imports: [MatSnackBarModule, HttpClientModule],
    });
  });

  it('should be created', inject([Socket], (socket: Socket) => {
    expect(socket).toBeTruthy();
  }));
});
