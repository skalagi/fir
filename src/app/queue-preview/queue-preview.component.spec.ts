import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuePreviewComponent } from './queue-preview.component';

describe('QueuePreviewComponent', () => {
  let component: QueuePreviewComponent;
  let fixture: ComponentFixture<QueuePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
