import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WlanPage } from './wlan.page';

describe('WlanPage', () => {
  let component: WlanPage;
  let fixture: ComponentFixture<WlanPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(WlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
