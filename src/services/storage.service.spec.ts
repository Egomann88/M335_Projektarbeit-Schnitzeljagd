import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import {MockStorageService} from "../mocks/MockStorageService";

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: StorageService, useClass: MockStorageService}
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
