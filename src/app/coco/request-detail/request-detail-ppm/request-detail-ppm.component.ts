import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-detail-ppm',
  templateUrl: './request-detail-ppm.component.html',
  styleUrls: ['./request-detail-ppm.component.css']
})
export class RequestDetailPpmComponent implements OnInit {
  @Input() public printedPackaMatDetail = {};
  @Input() public expandAll = false;

  constructor() { }

  ngOnInit() {
  }

}
