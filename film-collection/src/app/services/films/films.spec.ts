import { TestBed } from '@angular/core/testing';

import { Films } from './films';

describe('Films', () => {
  let service: Films;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Films);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
