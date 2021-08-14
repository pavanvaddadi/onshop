import { TestBed } from '@angular/core/testing';

import { OnshopApiService } from './onshop-api.service';

describe('OnshopApiService', () => {
  let service: OnshopApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnshopApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
