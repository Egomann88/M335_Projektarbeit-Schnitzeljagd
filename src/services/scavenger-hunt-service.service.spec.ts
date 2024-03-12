import { TestBed } from '@angular/core/testing';

import { ScavengerHuntService } from './scavenger-hunt-service.service';

describe('ScavengerHuntServiceService', () => {
  let service: ScavengerHuntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScavengerHuntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
