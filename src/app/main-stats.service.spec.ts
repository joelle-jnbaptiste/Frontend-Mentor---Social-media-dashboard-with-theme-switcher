import { TestBed } from '@angular/core/testing';

import { MainStatsService } from './main-card/main-stats.service';

describe('MainStatsService', () => {
  let service: MainStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
