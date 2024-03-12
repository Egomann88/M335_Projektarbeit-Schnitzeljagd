import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {StorageService} from "./storage.service";
import {MockStorageService} from "../mocks/MockStorageService";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: StorageService, useClass: MockStorageService}
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
