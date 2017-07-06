import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-request-overview',
  templateUrl: './request-overview.component.html',
  styleUrls: ['./request-overview.component.css']
})
export class RequestOverviewComponent implements OnInit {
  private requestList:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Request', name: 'REQUEST', sort: 'asc',  filtering: {filterString: '', placeholder: 'Filter by Request'}, className: ['office-header', 'text-success']},
    {title: 'Name', name: 'NAME', filtering: {filterString: '', placeholder: 'Filter by Name'}},
    {title: 'FG', name: 'FG', filtering: {filterString: '', placeholder: 'Filter by FG'}},
    {title: 'Task Owner', name: 'TASK_OWNER', filtering: {filterString: '', placeholder: 'Filter by Ower'}},
    {title: 'Priority', name: 'PRIORITY', filtering: {filterString: '', placeholder: 'Filter by Priority'}},
    {title: 'Status', name: 'STATUS', filtering: {filterString: '', placeholder: 'Filter by Status'}},
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public length:number = 0;
  public config:any = {
    paging: false,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'position'},
    className: ['table-striped', 'table-bordered']
  };

  constructor(private requestService: TaskService) { }

  ngOnInit() {
    this.loadRequests();
  }

  private loadRequests() {
    this.requestService.getTasks()
      .subscribe(requests => {
        this.requestList = requests;
        this.onChangeTable(this.config);
      });
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }
  }

}
