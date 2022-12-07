import { TestBed } from '@angular/core/testing';

import { PurchasingATourService } from './purchasing-a-tour.service';

describe('PurchasingATourService', () => {
  let service: PurchasingATourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasingATourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
