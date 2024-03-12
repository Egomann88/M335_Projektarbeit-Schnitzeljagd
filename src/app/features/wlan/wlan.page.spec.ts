import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WlanPage } from './wlan.page';
import {UpperCasePipe} from "@angular/common";

describe('WlanPage', () => {
  let component: WlanPage;
  let fixture: ComponentFixture<WlanPage>;

  beforeEach((() => {
    TestBed.configureTestingModule(
      {
        providers: [
          {provide: UpperCasePipe, useClass: UpperCasePipe}
        ]
      }
    )
    fixture = TestBed.createComponent(WlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
