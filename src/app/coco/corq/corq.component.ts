import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-corq',
  templateUrl: './corq.component.html',
  styleUrls: ['./corq.component.css']
})
export class CorqComponent implements OnInit {
  public requestDetails: any = undefined;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('CorqComponent params=', params);
        this.loadRequestDetails(params.request);
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
