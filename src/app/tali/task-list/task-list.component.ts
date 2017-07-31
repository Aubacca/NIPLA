import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgTableComponent,
  NgTableFilteringDirective,
  NgTablePagingDirective,
  NgTableSortingDirective } from 'ng2-table/ng2-table';


import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // Task types.
  ADD_INFO = 'Add. Info.';
  TECHNICAL_ASSESSMENT = 'Tech. Assessment';
  //
  taskList: Task[] = [];
  public columns: Array<any> = [
    {title: 'Type', name: 'TYPE', filtering: {filterString: '', placeholder: 'Filter by Type'}},
    {title: 'Name', name: 'NAME', filtering: {filterString: '', placeholder: 'Filter by Name'}},
    {title: 'FG', name: 'FG', filtering: {filterString: '', placeholder: 'Filter by FG'}},
    {title: 'Task Owner', name: 'TASK_OWNER', filtering: {filterString: '', placeholder: 'Filter by Ower'}},
    {title: 'Request', name: 'REQUEST', filtering: {filterString: '', placeholder: 'Filter by Request'},
      className: ['office-header', 'text-success'], sort: 'asc'},
    {title: 'Priority', name: 'PRIORITY', filtering: {filterString: '', placeholder: 'Filter by Priority'}},
  ];
  public page = 1;
  public itemsPerPage = 10;
  public length = 0;

  public config: any = {
    paging: false,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'position'},
    className: ['table-striped', 'table-bordered']
  };

  constructor(private router: Router,
    private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.taskList = tasks;
        this.onChangeTable(this.config);
      });
  }

  public changePage(page: any, data: Array<any> = this.taskList): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }
//    let filteredData = this.changeFilter(this.data, this.config);
//    let sortedData = this.changeSort(filteredData, this.config);
//    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
//    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
    if (data.column === 'TYPE') {
      this.router.navigate(['/corq', data.row.ID]);
    } else if (data.column === 'REQUEST') {
      this.router.navigate(['/cord', data.row.REQUEST]);
    }
  }

  public onTaskTypeSelected(e, task) {
    switch (task.TYPE) {
      case this.ADD_INFO:
        this.router.navigate(['/tasks/additionalInformation', task.id]);
        break;

      case this.TECHNICAL_ASSESSMENT:
        this.router.navigate(['/tasks/technicalAssessment', task.id]);
        break;

      default:
        break;
    }
  }
}
