  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatButtonModule, MatSnackBarModule, MatIconModule } from '@angular/material';

import { ChannelComponent } from './channel.component';
import { ActionModule } from '../action/action.module';

describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', function () {
    expect(component).toBeTruthy();
  });

  /*  ehh,.. mock getChannels 
  it('should has label text', function () {
    let buttonText = de.query(By.css('button')).nativeElement.innerText;

    expect(buttonText.length).toBeGreaterThan(0);
  });*/
});
