import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HuntfinPage } from './huntfin.page';

describe('HuntfinPage', () => {
  let component: HuntfinPage;
  let fixture: ComponentFixture<HuntfinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HuntfinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
