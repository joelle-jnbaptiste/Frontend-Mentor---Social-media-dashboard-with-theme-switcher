import { TestBed } from '@angular/core/testing';

import { SubStatsService } from './sub-stats.service';

describe('SubStatsService', () => {
  let service: SubStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
