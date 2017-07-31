import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public userInfo = <any>{};

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.userInfo.firstName = 'John';
    this.userInfo.lastName = 'Doe';
    this.userInfo.assignedRoles = ['AW Creator', 'CMO Quality', 'PAO', 'PDF Proof Read'];
  }
}
