import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { StatisticsComponent } from './statistics.component';
import { StatisticsModule } from './statistics.module';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StatisticsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
