/* tslint:disable:no-unused-variable */

import { TestBed,inject } from '@angular/core/testing';
import { OwnerServiceService } from './ownerService.service';

describe('Service: OwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerServiceService]
    });
  });

  it('should ...', inject([OwnerServiceService], (service: OwnerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
