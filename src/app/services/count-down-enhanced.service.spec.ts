import { TestBed } from '@angular/core/testing';

import { CountDownEnhancedService } from './count-down-enhanced.service';

describe('CountDownEnhancedService', () => {
  let service: CountDownEnhancedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDownEnhancedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
