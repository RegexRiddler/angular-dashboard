import { TestBed, inject } from '@angular/core/testing';

import { XkcdService } from './xkcd.service';

describe('XkcdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XkcdService]
    });
  });

  it('should be created', inject([XkcdService], (service: XkcdService) => {
    expect(service).toBeTruthy();
  }));
});
