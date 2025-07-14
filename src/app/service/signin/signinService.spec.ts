import { TestBed } from '@angular/core/testing';

import { SigninService } from './signinService';

describe('Signin', () => {
  let service: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
