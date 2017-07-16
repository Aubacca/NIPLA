import { TestBed, inject } from '@angular/core/testing';

import { EventActionsService } from './event-actions.service';

describe('EventActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventActionsService]
    });
  });

  it('should be created', inject([EventActionsService], (service: EventActionsService) => {
    expect(service).toBeTruthy();
  }));
});
