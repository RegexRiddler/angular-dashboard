import { TestBed, inject } from '@angular/core/testing';

import { RandomJokeService } from './random-joke.service';

describe('RandomJokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomJokeService]
    });
  });

  it('should be created', inject([RandomJokeService], (service: RandomJokeService) => {
    expect(service).toBeTruthy();
  }));
});
