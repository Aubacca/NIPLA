import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-corq',
  templateUrl: './corq.component.html',
  styleUrls: ['./corq.component.css']
})
export class CorqComponent implements OnInit {
  public taskDetails: any = undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('CorqComponent params=', params);
        this.taskDetails = undefined;
        this.loadTaskDetails(params.id)
        this.loadRequestDetails(params.request);
      }
      );
  }

  private loadTaskDetails(taskId) {
    console.log('c loadTaskDetails taskId=', taskId);
    if (taskId) {
      this.taskService.getTaskById(taskId)
        .subscribe(
          task => {
            task.forEach(element => {
              if (element.ID === taskId) {
                this.taskDetails = element;
              }
            });
          }
        );
      }
  }

  private loadRequestDetails(requestId) {
    console.log('c loadRequestDetails requestId=', requestId);
    if (requestId) {
      this.taskService.getTasks().subscribe(
        tasks => {
          tasks.forEach(task => {
            if (task.REQUEST === requestId) {
              this.taskDetails = task;
            }
          });
        });
    }
  }

}
