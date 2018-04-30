import { TestBed, inject } from '@angular/core/testing';

import { GameHttpService } from './game-http.service';

describe('GameHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameHttpService]
    });
  });

  it('should be created', inject([GameHttpService], (service: GameHttpService) => {
    expect(service).toBeTruthy();
  }));
});
