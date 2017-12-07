import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { Socket } from './socket';

describe('Socket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Socket],
      imports: [MatSnackBarModule],
    });
  });

  it('should be created', inject([Socket], (socket: Socket) => {
    expect(socket).toBeTruthy();
  }));
});
