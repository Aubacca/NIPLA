import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: any[];

  constructor(private taskService: TaskService) {
    this.taskList = taskService.getTasks();
  }

  ngOnInit() {
  }

}
