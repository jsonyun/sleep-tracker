import { TestBed } from '@angular/core/testing';

import { SleepdataService } from './sleepdata.service';

describe('SleepdataService', () => {
  let service: SleepdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
