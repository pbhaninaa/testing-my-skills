import { TestBed } from '@angular/core/testing';

import { TestingserviceService } from './testingservice.service';

describe('TestingserviceService', () => {
  let service: TestingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
