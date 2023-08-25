import { TestBed } from '@angular/core/testing';

import { TosatService } from './tosat.service';

describe('TosatService', () => {
  let service: TosatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TosatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
