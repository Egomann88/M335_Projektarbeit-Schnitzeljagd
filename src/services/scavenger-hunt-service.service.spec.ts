import { TestBed } from '@angular/core/testing';

import { ScavengerHuntServiceService } from './scavenger-hunt-service.service';

describe('ScavengerHuntServiceService', () => {
  let service: ScavengerHuntServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScavengerHuntServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
