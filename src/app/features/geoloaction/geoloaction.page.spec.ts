import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoloactionPage } from './geoloaction.page';

describe('GeoloactionPage', () => {
  let component: GeoloactionPage;
  let fixture: ComponentFixture<GeoloactionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeoloactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
