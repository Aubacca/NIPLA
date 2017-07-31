import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from './../../../services/task.service';
import { Task } from './../../../models/task';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {
  private taskId: string;
  public taskDetail: Task = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit() {
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

  doSubmit(e) {
    console.log('taskDetail=', this.taskDetail);
    console.log('this.taskId=', this.taskId);
    this.taskService.updateTask(this.taskId, this.taskDetail)
      .subscribe(resp => {
        console.log('resp=', resp);
        this.taskDetail = resp[0];
        this.taskDetail = resp;
        console.log('this.taskDetail=', this.taskDetail);
      });
  }
}
