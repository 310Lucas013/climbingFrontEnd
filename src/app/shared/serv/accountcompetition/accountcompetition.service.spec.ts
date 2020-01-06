import { TestBed } from '@angular/core/testing';

import { AccountcompetitionService } from './accountcompetition.service';

describe('AccountcompetitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountcompetitionService = TestBed.get(AccountcompetitionService);
    expect(service).toBeTruthy();
  });
});
