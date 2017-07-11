import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from './../../services/task.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {
  private taskId: string;
  private taskDetail: any = null;
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
        console.log('AdditionalInformationComponent params=', params);
        this.taskId = params.taskId;
        //
        this.taskService.getTask(this.taskId)
          .subscribe(task => {
            console.log('AdditionalInformationComponent task=', task);
            this.taskDetail = task[0];
          });
      });
  }

  goToTaskList (e) {
    console.log('To to task list ..', e);
    this.router.navigate(['/tali']);
  }
}
