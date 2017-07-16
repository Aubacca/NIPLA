import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { EventAction } from '../modules/event-action';

@Injectable()
export class EventActionsService {
  private url_alpin_data = 'assets/alpin2-data.json';

  constructor(private http: Http) { }

  public getEventActions(): Observable<any> {
    return this.http.get(this.url_alpin_data)
      .map((response: Response) => response.json().eventActions);
  }
}
