import { TestBed, inject } from '@angular/core/testing';

import { TriviaQuestionsService } from './trivia-questions.service';

describe('TriviaQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriviaQuestionsService]
    });
  });

  it('should be created', inject([TriviaQuestionsService], (service: TriviaQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
