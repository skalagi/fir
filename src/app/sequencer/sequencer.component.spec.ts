import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerModule } from 'ngx-color-picker';

import { SequencerComponent } from './sequencer.component';
import { materialModules } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { ActionModule } from '../action/action.module';

describe('SequencerComponent', () => {
  let component: SequencerComponent;
  let fixture: ComponentFixture<SequencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequencerComponent],
      imports: [ColorPickerModule, ...materialModules, HttpClientModule, ActionModule]
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
