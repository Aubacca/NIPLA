import { Task } from './task';

export class TaskImpl {
  task: Task;

  constructor(jsondata) {
    Object.assign(this, jsondata);
  }
}
