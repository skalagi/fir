import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatTooltipModule, MatSlideToggleModule, MatIconModule, MatListModule, MatSnackBarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from "./app.component";
import { ScreenComponent } from "./screen/screen.component";
import { ChannelComponent } from "./channel/channel.component";
import { Socket } from "./socket";
import { StatisticsComponent } from "./statistics/statistics.component";
import { SequencerComponent } from "./sequencer/sequencer.component";
import { ActionService } from './action.service';
import { FormsModule } from '@angular/forms';

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
        SequencerComponent,
      ],
      providers: [Socket, ActionService],
      imports: [
        HttpClientModule,
        ColorPickerModule,
        MatListModule,
        FormsModule,
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

  /* mock channels
  it('should have channels', function () {
    expect(de.queryAll(By.css('button')).length).toBeGreaterThan(0);
  });*/
});
