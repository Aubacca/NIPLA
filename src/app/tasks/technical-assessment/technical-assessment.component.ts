import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskService } from './../../services/task.service';


@Component({
  selector: 'app-technical-assessment',
  templateUrl: './technical-assessment.component.html',
  styleUrls: ['./technical-assessment.component.css']
})
export class TechnicalAssessmentComponent implements OnInit {
  public taskDetail: Object = {};
  public radioModel = 'NO';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.loadTask(params.taskId));
  }

  private loadTask(taskId) {
    this.taskService.getTask(taskId)
      .subscribe(task => this.taskDetail = task[0]);
  }

  goToTaskList (e) {
    console.log('To to task list ..', e);
    this.router.navigate(['/tali']);
  }
}
