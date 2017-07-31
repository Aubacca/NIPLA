import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TaskService } from './../../../services/task.service';
import { Task } from './../../../models/task';
import { TriviaQuestionsService } from '../../../services/trivia-questions.service'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css'],
  providers: [TriviaQuestionsService]
})
export class AdditionalInformationComponent implements OnInit {
  private taskId: string;
  public taskDetail: Task = null;
  private submitted: true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private tiviaQuestionService: TriviaQuestionsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.taskId = params.taskId;
        //
        this.taskService.getTask(this.taskId)
          .subscribe(task => {
            this.taskDetail = task[0];
            //
            // @TODO:
            // How to update view dynamically with the value in the field and not with this help property?
            if (this.taskDetail.STATUS.toUpperCase() === 'SUBMITTED') {
              this.submitted = true;
            }
            if (!this.taskDetail.question) {
              this.tiviaQuestionService.getRandomQuestion()
                .subscribe(question => this.taskDetail.question = question[0].question
                   + ' (=> Answer: ' + question[0].answer + ')');
              }
          });
      });
  }

  goToTaskList (e) {
    this.router.navigate(['/tali']);
  }

  isSubmitted() {
    return this.submitted;
  }

  doSubmit(e) {
    this.taskDetail.STATUS = 'Submitted';
    this.taskService.updateTask(this.taskId, this.taskDetail)
      .subscribe(resp => {
        this.taskDetail = resp;
        //
        // Go to task list to get the next task.
        this.router.navigate(['/tali']);
      });
  }
}

/*
@TODO:
implement form with Angular FormBuilder.
*/