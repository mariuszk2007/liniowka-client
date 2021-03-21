/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PathService } from './Path.service';

describe('Service: Path', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathService]
    });
  });

  it('should ...', inject([PathService], (service: PathService) => {
    expect(service).toBeTruthy();
  }));
});
