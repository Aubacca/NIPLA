import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  public requestDetails: any = undefined;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('CorqComponent params=', params);
        this.loadRequestDetails(params.requestId);
      }
      );
  }

  private loadRequestDetails(requestId) {
    console.log('c loadRequestDetails requestId=', requestId);
    if (requestId) {
      this.requestService.getRequest(requestId)
        .subscribe(
          request => {
            console.log('request=', request);
            this.requestDetails = request[0];
          });
      }
  }
}
