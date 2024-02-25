import { TestBed } from '@angular/core/testing';

import { GoogleSearchBarService } from './google-search-bar.service';

describe('GoogleSearchBarService', () => {
  let service: GoogleSearchBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSearchBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
