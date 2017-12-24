import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

import { ActionService } from './action.service';
import { Socket } from './socket';

describe('ActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionService, Socket],
      imports: [MatSnackBarModule, HttpClientModule],
    });
  });

  it('should be created', inject([ActionService], (service: ActionService) => {
    expect(service).toBeTruthy();
  }));
});
