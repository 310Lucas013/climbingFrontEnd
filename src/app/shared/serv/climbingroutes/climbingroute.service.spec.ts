import { TestBed } from '@angular/core/testing';

import { ClimbingrouteService } from './climbingroute.service';

describe('ClimbingrouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimbingrouteService = TestBed.get(ClimbingrouteService);
    expect(service).toBeTruthy();
  });
});
