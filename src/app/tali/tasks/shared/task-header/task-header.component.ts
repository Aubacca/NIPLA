import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {
  @Input() taskData: any;
  private dueDate = new Date();

  constructor() { }

  ngOnInit() {
   this.dueDate.setDate(this.dueDate.getDate() + 10);
  }

}
