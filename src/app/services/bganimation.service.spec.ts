import { TestBed, inject } from '@angular/core/testing';

import { BganimationService } from './bganimation.service';

describe('BganimationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BganimationService]
    });
  });

  it('should be created', inject([BganimationService], (service: BganimationService) => {
    expect(service).toBeTruthy();
  }));
});
