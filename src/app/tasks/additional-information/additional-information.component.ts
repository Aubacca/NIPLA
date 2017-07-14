import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from './../../services/task.service';
import { Task } from './../../modules/task';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {
  private taskId: string;
  public taskDetail: Task = null;
  private dueDate = new Date();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit() {
    this.dueDate.setDate(this.dueDate.getDate() + 10);
    //
    this.route.params.subscribe(
      params => {
        this.taskId = params.taskId;
        //
        this.taskService.getTask(this.taskId)
          .subscribe(task => this.taskDetail = task[0]);
      });
  }

  goToTaskList (e) {
    this.router.navigate(['/tali']);
  }
}
