import { TestBed } from '@angular/core/testing';

import { FirebaseHelperService } from './firebase-helper.service';

describe('FirebaseHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseHelperService = TestBed.get(FirebaseHelperService);
    expect(service).toBeTruthy();
  });
});
