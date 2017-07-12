import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-detail-view',
  templateUrl: './request-detail-view.component.html',
  styleUrls: ['./request-detail-view.component.css']
})
export class RequestDetailViewComponent implements OnInit {
  @Input() public requestDetail: {};

  constructor() { }

  ngOnInit() {
  }

}
