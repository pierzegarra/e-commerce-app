import { TestBed } from '@angular/core/testing';

import { LUv2ShopFormService } from './luv2-shop-form.service';

describe('Luv2ShopFormService', () => {
  let service: LUv2ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LUv2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
