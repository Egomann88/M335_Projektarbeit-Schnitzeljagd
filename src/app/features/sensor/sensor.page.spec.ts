import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SensorPage } from './sensor.page';
import {UpperCasePipe} from "@angular/common";

describe('SensorPage', () => {
  let component: SensorPage;
  let fixture: ComponentFixture<SensorPage>;

  beforeEach((() => {
    TestBed.configureTestingModule(
      {
        providers: [
          {provide: UpperCasePipe, useClass: UpperCasePipe}
        ]
      }
    )
    fixture = TestBed.createComponent(SensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
