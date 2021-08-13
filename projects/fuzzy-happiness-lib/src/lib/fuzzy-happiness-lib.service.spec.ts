import { TestBed } from '@angular/core/testing';

import { FuzzyHappinessLibService } from './fuzzy-happiness-lib.service';

describe('FuzzyHappinessLibService', () => {
  let service: FuzzyHappinessLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuzzyHappinessLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
