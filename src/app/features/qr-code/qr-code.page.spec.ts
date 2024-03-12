import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import { QrCodePage } from './qr-code.page';
import {StorageService} from "../../../services/storage.service";
import {MockStorageService} from "../../../mocks/MockStorageService";
import {UpperCasePipe} from "@angular/common";

describe('QrCodePage', () => {
  let component: QrCodePage;
  let fixture: ComponentFixture<QrCodePage>;

  beforeEach((() => {
    TestBed.configureTestingModule(
      {
        providers: [
          {provide: StorageService, useClass: MockStorageService},
          {provide: UpperCasePipe, useClass: UpperCasePipe}
        ]
      }
    )
    fixture = TestBed.createComponent(QrCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
