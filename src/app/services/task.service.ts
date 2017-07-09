import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

@Injectable()
export class TaskService {
//  private url_tasks = 'http://www.mocky.io/v2/59512cfc12000078128c7ab3';
  private url_tasks = 'assets/alpin2-data.json';

  people: any[];

  constructor(private http: Http) {
  }

  getTasks(): Observable<any> {
/*
    let headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
*/
    let head: RequestOptionsArgs;


    let headerArgs = new Headers({ 'Content-Type': 'application/json' });
    headerArgs.append('Accept', 'application/json');
//    headerArgs.append('Origin', 'http://localhost:4200');
//    headerArgs.append('Access-Control-Request-Method', 'GET');
    headerArgs.append('Access-Control-Allow-Origin', '*');

    let options = new RequestOptions({
      headers: headerArgs
//      ,search: new URLSearchParams('validateUsr=false') // <-----
    });
/*
    head.headers.append('Content-Type', 'application/json');
    head.headers.append('Accept', 'application/json');
    head.headers.append('Origin', '*');
    head.headers.append('Access-Control-Request-Method', 'GET');
*/

    return this.http.get(this.url_tasks, options)
//      .do(res => console.log('res:', res))
      // Call map on the response observable to get the parsed people object
      .map(res => res.json().tasks);
  }

  public getTaskById(taskId){
    console.log('s taskId=', taskId);
    return this.http.get(this.url_tasks)
      .map(res => res.json().tasks);
  }

  public getTask(taskId: string) {
    return this.http.get(this.url_tasks)
      .map(res => res.json().tasks
        .filter(task => {
          return task.ID === taskId;
        }));
  }
}