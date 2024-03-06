import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceStatusPage } from './device-status.page';

describe('DeviceStatusPage', () => {
  let component: DeviceStatusPage;
  let fixture: ComponentFixture<DeviceStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeviceStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
