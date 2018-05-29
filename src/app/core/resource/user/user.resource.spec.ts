import { TestBed, inject } from '@angular/core/testing';

import { UserResource } from './user.resource';

describe('UserResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResource]
    });
  });

  it('should be created', inject([UserResource], (service: UserResource) => {
    expect(service).toBeTruthy();
  }));
});
