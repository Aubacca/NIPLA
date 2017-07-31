import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-detail-fg',
  templateUrl: './request-detail-fg.component.html',
  styleUrls: ['./request-detail-fg.component.css']
})
export class RequestDetailFgComponent implements OnInit {
  @Input() public finishGoodDetail = {};
  @Input() public expandAll = false;

  constructor() { }

  ngOnInit() {
  }

}
