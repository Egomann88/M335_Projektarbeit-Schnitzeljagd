import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceStatusPage } from './device-status.page';
import {UpperCasePipe} from "@angular/common";

describe('DeviceStatusPage', () => {
  let component: DeviceStatusPage;
  let fixture: ComponentFixture<DeviceStatusPage>;

  beforeEach((() => {
    TestBed.configureTestingModule(
      {
        providers: [
          {provide: UpperCasePipe, useClass: UpperCasePipe}
        ]
      }
    )
    fixture = TestBed.createComponent(DeviceStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
