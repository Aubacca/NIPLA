import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { EventAction } from '../modules/event-action';

@Injectable()
export class EventActionsService {
//  private url_alpin_data = 'assets/alpin2-data.json';
  private url_alpin_data = 'http://localhost:3000/eventActions';

  constructor(private http: Http) { }

  public getEventActions(): Observable<any> {
    return this.http.get(this.url_alpin_data)
      .map((response: Response) => response.json());
  }

  public getEventAction(eventActionId: string): Observable<any> {
    return this.http.get(this.url_alpin_data + '/' + eventActionId)
      .map((response: Response) => response.json());
  }
}
