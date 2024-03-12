import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPage } from './test.page';
import {StorageService} from "../../services/storage.service";
import {MockStorageService} from "../../mocks/MockStorageService";

describe('TestPage', () => {
  let component: TestPage;
  let fixture: ComponentFixture<TestPage>;

  beforeEach((() => {
    TestBed.configureTestingModule(
      {
        providers: [
          {provide: StorageService, useClass: MockStorageService}
        ]
      }
    )
    fixture = TestBed.createComponent(TestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
