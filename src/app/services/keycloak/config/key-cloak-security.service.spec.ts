import { TestBed } from '@angular/core/testing';

import { KeyCloakSecurityService } from './key-cloak-security.service';

describe('KeyCloakSecurityService', () => {
  let service: KeyCloakSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyCloakSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
