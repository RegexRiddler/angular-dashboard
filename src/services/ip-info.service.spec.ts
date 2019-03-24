import { TestBed, inject } from '@angular/core/testing';

import { IpInfoService } from './ip-info.service';

describe('IpInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpInfoService]
    });
  });

  it('should be created', inject([IpInfoService], (service: IpInfoService) => {
    expect(service).toBeTruthy();
  }));
});
