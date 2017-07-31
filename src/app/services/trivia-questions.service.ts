import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable} from 'rxjs';

@Injectable()
export class TriviaQuestionsService {
  private url = 'http://jservice.io/api/random';

  constructor(private http: Http) {}

  public getRandomQuestion(): Observable<any> {
    return this.http.get(this.url)
      .map(res => res.json());
  }

}
