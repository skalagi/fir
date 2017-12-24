import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { StatisticsComponent } from './statistics.component';
import { ActionService } from '../action/action.service';
import { StatisticsModule } from './statistics.module';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  let actions = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StatisticsModule],
      providers: [{
        provide: ActionService, useValue: {
          action: (act, cb) => actions[act] = cb,
        }
      }]
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

  it('should recive stats', () => {
    expect(component.currentOnline).toBeFalsy();
    expect(component.todayChanges).toBeFalsy();
    expect(component.todayVisits).toBeFalsy();
    expect(component.totalChanges).toBeFalsy();
    expect(component.totalVisits).toBeFalsy();

    actions['UpdateStats']({
      currentOnline: 6,
      todayVisits: 5,
      totalChanges: 4,
      totalVisits: 3,
      todayChanges: 2
    });

    expect(component.currentOnline).toBe(6);
    expect(component.todayChanges).toBe(2);
    expect(component.todayVisits).toBe(5);
    expect(component.totalChanges).toBe(4);
    expect(component.totalVisits).toBe(3);
  });

  it('should reactive update stats upon live changes', () => {
    component.todayChanges = 5;
    component.totalChanges = 20;

    actions['ChangeState']();

    expect(component.todayChanges).toBe(6);
    expect(component.totalChanges).toBe(21);

    actions['ChangeState']();
    actions['ChangeState']();

    expect(component.todayChanges).toBe(8);
    expect(component.totalChanges).toBe(23);
  });
});
