import { TestBed } from '@angular/core/testing';

import { WindowSizeService } from './window-size.service';

describe('WindowSizeService', () => {
  let service: WindowSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
