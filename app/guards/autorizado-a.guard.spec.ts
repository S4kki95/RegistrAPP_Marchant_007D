import { TestBed } from '@angular/core/testing';

import { AutorizadoAGuard } from './autorizado-a.guard';

describe('AutorizadoAGuard', () => {
  let guard: AutorizadoAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorizadoAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
