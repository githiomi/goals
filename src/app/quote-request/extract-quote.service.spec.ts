import { TestBed } from '@angular/core/testing';

import { ExtractQuoteService } from './extract-quote.service';

describe('ExtractQuoteService', () => {
  let service: ExtractQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
