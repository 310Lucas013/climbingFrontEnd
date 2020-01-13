import { TestBed } from '@angular/core/testing';

import { AccountrouteService } from './accountroute.service';

describe('AccountrouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountrouteService = TestBed.get(AccountrouteService);
    expect(service).toBeTruthy();
  });
});
