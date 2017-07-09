import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
  private url_alpin_data = 'assets/alpin2-data.json';
  constructor(private http: Http) { }

  getRequests(): Observable<any> {
    return this.http.get(this.url_alpin_data)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json().requests);
  }

  public getRequest(requestId:string): Observable<any> {
    return this.http.get(this.url_alpin_data)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json().requests
        .filter(request => request.REQUEST === requestId));
  }
}
