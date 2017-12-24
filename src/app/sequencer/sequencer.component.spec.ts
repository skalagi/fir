import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';


import { SequencerComponent } from './sequencer.component';
import { SequencerModule } from './sequencer.module';

describe('SequencerComponent', () => {
  let component: SequencerComponent;
  let fixture: ComponentFixture<SequencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SequencerModule],
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
