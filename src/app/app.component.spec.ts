import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatTooltipModule, MatSlideToggleModule, MatIconModule, MatListModule, MatSnackBarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from "./app.component";
import { ScreenComponent } from "./screen/screen.component";
import { ChannelComponent } from "./channel/channel.component";
import { Socket } from "./socket";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ActionService } from './action.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChannelComponent,
        ScreenComponent,
        StatisticsComponent,
      ],
      providers: [Socket, ActionService],
      imports: [
        HttpClientModule,
        MatListModule,
        MatSnackBarModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatSlideToggleModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', function () {
    expect(component).toBeTruthy();
  });

  it('should have screen', function () {
    expect(de.query(By.css('screen'))).toBeTruthy();
  })

  it('should have channels', function () {
    expect(de.queryAll(By.css('button')).length).toBeGreaterThan(0);
  });
});
