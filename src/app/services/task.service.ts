import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

@Injectable()
export class TaskService {
//  private url_tasks = 'http://www.mocky.io/v2/59512cfc12000078128c7ab3';
  private url_tasks = 'assets/tasks.json';

  people: any[];

  constructor(private http: Http) {
  }

  getTasks(): Observable<any> {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url_tasks, headers)
      .do(res => console.log('res:', res))
      // Call map on the response observable to get the parsed people object
      .map(res => res.json());
  }
}