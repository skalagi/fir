import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import { ScreenModule } from './screen.module';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScreenModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
