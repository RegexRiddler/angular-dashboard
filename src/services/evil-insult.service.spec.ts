import { TestBed, inject } from '@angular/core/testing';

import { EvilInsultService } from './evil-insult.service';

describe('EvilInsultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvilInsultService]
    });
  });

  it('should be created', inject([EvilInsultService], (service: EvilInsultService) => {
    expect(service).toBeTruthy();
  }));
});
