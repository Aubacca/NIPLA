import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Request } from '../models/request';

@Injectable()
export class RequestService {
//  private url_alpin_data = 'assets/alpin2-data.json';
  private url_alpin_data = 'http://localhost:3000/requests';

  constructor(private http: Http) { }

  public getRequests(): Observable<any> {
    return this.http.get(this.url_alpin_data)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json());
  }

  public getRequest(requestId: string): Observable<Request> {
    return this.http.get(this.url_alpin_data + '?REQUEST=' + requestId)
      // Call map on the response observable to get the parsed people object
      .map(res => res.json());
  }

  public getRaces(
    season: number,
    delaySeconds: number = 3000): Observable<any> {
    return this.http.get('http://ergast.com/api/f1/' + season + '/races.JSON')
      .delay(delaySeconds)
      .map((response: Response) => response.json().MRData.RaceTable);
  }
/*
  public getMockies(): Observable<string> {
    return this.http.get('http://www.mocky.io/v2/5185415ba171ea3a00704eed')
      .delay(2000)
      .map((response: Response) => response.json());
  }
*/
}
