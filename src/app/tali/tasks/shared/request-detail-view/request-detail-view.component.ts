import { Component, OnInit, Input } from '@angular/core';

import { Request } from '../../../../models/request';

@Component({
  selector: 'app-request-detail-view',
  templateUrl: './request-detail-view.component.html',
  styleUrls: ['./request-detail-view.component.css']
})
export class RequestDetailViewComponent implements OnInit {
  @Input() public requestDetail: Request;

  constructor() { }

  ngOnInit() {
  }

}
