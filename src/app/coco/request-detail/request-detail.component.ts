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
  public targetConfList = [];
  public ppmOnly = false;
  public fgOnly = false;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('CorqComponent params=', params);
        this.loadRequestDetails(params.requestId);
      });
    //
    this.targetConfList.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'ACTEMRA',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Small', 'MAKEUP': 'DE', 'PLANT_STATUS': 'Production', 'SHELF_LIVE': this.genShelfLive()});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'In Assessment', 'ACTIONS': 'RF', 'PI_NO': this.genId() + ', ' + this.genId(), 'MAKEUP': 'DE', 'MATERIAL': 'BOX',
      'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'BPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'Planing', 'ACTIONS': 'RF', 'PI_NO': this.genId(), 'MAKEUP': 'DE', 'MATERIAL': 'LEAF',
      'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'TSPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'Proof Read', 'ACTIONS': 'RF', 'PI_NO': this.genId(), 'MAKEUP': 'DE', 'MATERIAL': 'FOLD',
      'PACK_SITE': '120111, F. Hoffmann-La Roche AG, Mannheim'});
    //
    this.targetConfList.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-'+ this.genId(), 'PROD_FAM': 'ACTEMRA',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'FR', 'PLANT_STATUS': 'Draft', 'SHELF_LIVE': this.genShelfLive()});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'TSPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'Proof Read', 'ACTIONS': 'FRTO', 'PI_NO': this.genId(), 'MAKEUP': 'FR', 'MATERIAL': 'BOX',
      'PACK_SITE': '120107, F. Hoffmann-La Roche AG, Paris'});
    //
    this.targetConfList.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'IBALIZUMAB',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'DE', 'PLANT_STATUS': 'Review'});
    //
    this.targetConfList.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'APITOLISIB',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'CH', 'PLANT_STATUS': 'Approval', 'SHELF_LIVE': this.genShelfLive()});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'TSPR', 'PROD_FAM': 'APITOLISIB',
      'PPM_STATUS': 'Proof Read', 'ACTIONS': 'DHE', 'PI_NO': this.genId() + ', ' + this.genId(), 'MAKEUP': 'CH', 'MATERIAL': 'FOLD',
      'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'BPR', 'PROD_FAM': 'APITOLISIB',
      'PPM_STATUS': 'In Detailing', 'ACTIONS': 'CKI', 'PI_NO': this.genId(), 'MAKEUP': 'CH', 'MATERIAL': 'LEAF',
      'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FPR', 'PROD_FAM': 'APITOLISIB',
      'PPM_STATUS': 'PDF Printing', 'ACTIONS': 'OK', 'PI_NO': this.genId() + ', 3457745, ' + this.genId(), 'MAKEUP': 'CH', 'MATERIAL': 'BOX',
      'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    //
    this.targetConfList.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'CELLCEPT',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'AUT', 'PLANT_STATUS': 'Production', 'SHELF_LIVE': this.genShelfLive()});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FBPR', 'PROD_FAM': 'CELLCEPT',
      'PPM_STATUS': 'In Assessment', 'ACTIONS': 'RF', 'PI_NO': this.genId() + ', ' + this.genId(), 'MAKEUP': 'AUT', 'MATERIAL': 'LEAF',
      'PACK_SITE': '120112, F. Hoffmann-La Roche AG, Wien'});
    this.targetConfList.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FBPR3', 'PROD_FAM': 'CELLCEPT',
      'PPM_STATUS': 'In Detailing', 'ACTIONS': 'RFB', 'PI_NO': this.genId() + ', ' + this.genId(), 'MAKEUP': 'AUT', 'MATERIAL': 'BOX',
      'PACK_SITE': '120112, F. Hoffmann-La Roche AG, Wien'});
  }

  private genShelfLive () {
    return Math.floor(Math.random() * 24) + 6;
  }

  private genId () {
    return Math.floor(Math.random() * 999999);
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
