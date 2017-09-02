import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact-service.service';

describe('ContactServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should ...', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
