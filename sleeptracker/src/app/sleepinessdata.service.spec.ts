import { TestBed } from '@angular/core/testing';

import { SleepinessdataService } from './sleepinessdata.service';

describe('SleepinessdataService', () => {
  let service: SleepinessdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepinessdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
