import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { filmsResolver } from './films-resolver';

describe('filmsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => filmsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
