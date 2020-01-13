import { TestBed } from '@angular/core/testing';

import { CompetitionrouteService } from './competitionroute.service';

describe('CompetitionrouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetitionrouteService = TestBed.get(CompetitionrouteService);
    expect(service).toBeTruthy();
  });
});
