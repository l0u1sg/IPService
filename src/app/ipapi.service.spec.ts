import { TestBed } from '@angular/core/testing';

import { IPApiService } from './ipapi.service';

describe('IPApiService', () => {
  let service: IPApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
