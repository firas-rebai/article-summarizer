import { TestBed } from '@angular/core/testing';

import { IeeeApiService } from './ieee-api.service';

describe('IeeeApiService', () => {
  let service: IeeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IeeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
