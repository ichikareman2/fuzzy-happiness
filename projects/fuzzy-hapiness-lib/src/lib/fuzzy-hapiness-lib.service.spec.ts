import { TestBed } from '@angular/core/testing';

import { FuzzyHapinessLibService } from './fuzzy-hapiness-lib.service';

describe('FuzzyHapinessLibService', () => {
  let service: FuzzyHapinessLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuzzyHapinessLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
