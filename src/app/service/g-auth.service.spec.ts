import { TestBed, inject } from '@angular/core/testing';

import { GAuthService } from './g-auth.service';

describe('GAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GAuthService]
    });
  });

  it('should be created', inject([GAuthService], (service: GAuthService) => {
    expect(service).toBeTruthy();
  }));
});
