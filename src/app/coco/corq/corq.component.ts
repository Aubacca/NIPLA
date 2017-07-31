import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request';

@Component({
  selector: 'app-corq',
  templateUrl: './corq.component.html',
  styleUrls: ['./corq.component.css']
})
export class CorqComponent implements OnInit {
  public requestDetails: Request;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.loadRequestDetails(params.request));
  }

  private loadRequestDetails(requestId) {
    if (requestId) {
      this.requestService.getRequest(requestId)
        .subscribe(request => this.requestDetails = request[0]);
      }
  }
}
