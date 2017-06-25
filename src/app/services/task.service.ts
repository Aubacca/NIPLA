import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getTasks(): any[] {
    return TASKS;
  };

  private getNextPartyId(): Promise<number> {
    return new Promise((resolve, reject) => {
      let partyId = localStorage.get('partyId') as number;
      partyId = typeof partyId === 'undefined' ? 1 : ++partyId;
      localStorage.set('partyId', partyId);
      resolve(partyId);
    });
  }  
}

const TASKS:any[] = [
  {id: 0, name: 'ADD_INFO', data: 'Request Task - 1'},
  {id: 1, name: 'ADD_INFO', data: 'Request Task - 2'},
  {id: 2, name: 'ADD_INFO', data: 'Request Task - 3'},
  ];