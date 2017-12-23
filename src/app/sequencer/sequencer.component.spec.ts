import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerModule } from 'ngx-color-picker';

import { SequencerComponent } from './sequencer.component';
import { materialModules } from '../app.module';
import { ActionService } from '../action.service';
import { Socket } from '../socket';
import { HttpClientModule } from '@angular/common/http';

describe('SequencerComponent', () => {
  let component: SequencerComponent;
  let fixture: ComponentFixture<SequencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequencerComponent],
      providers: [ActionService, Socket],
      imports: [ColorPickerModule, ...materialModules, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
