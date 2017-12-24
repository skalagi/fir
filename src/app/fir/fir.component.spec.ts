import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FirComponent } from './fir.component';
import { FirModule } from './fir.module';

describe('AppComponent', () => {
  let component: FirComponent;
  let fixture: ComponentFixture<FirComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirComponent);
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
