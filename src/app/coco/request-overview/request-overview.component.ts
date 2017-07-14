import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-overview',
  templateUrl: './request-overview.component.html',
  styleUrls: ['./request-overview.component.css']
})
export class RequestOverviewComponent implements OnInit {
  public requestList: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Request', name: 'REQUEST', sort: 'asc',  filtering: {filterString: '', placeholder: 'Filter by Request'},
      className: ['office-header', 'text-success']},
    {title: 'Name', name: 'NAME', filtering: {filterString: '', placeholder: 'Filter by Name'}},
    {title: 'Type', name: 'REQUEST_TYPE', filtering: {filterString: '', placeholder: 'Filter by Type'}},
    {title: 'FG', name: 'FG', filtering: {filterString: '', placeholder: 'Filter by FG'}},
    {title: 'Request Owner', name: 'REQUEST_OWNER', filtering: {filterString: '', placeholder: 'Filter by Ower'}},
    {title: 'Priority', name: 'PRIORITY', filtering: {filterString: '', placeholder: 'Filter by Priority'}},
    {title: 'Status', name: 'STATUS', filtering: {filterString: '', placeholder: 'Filter by Status'}},
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

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.loadRequests();
  }

  private loadRequests() {
    this.requestService.getRequests()
      .subscribe(requests => {
        this.requestList = requests;
        this.onChangeTable(this.config);
      });
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }
  }

}
