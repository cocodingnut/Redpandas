import { TestBed } from '@angular/core/testing';

import { AdminRouterGuard } from './admin-router.guard';

describe('AdminRouterGuard', () => {
  let guard: AdminRouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
