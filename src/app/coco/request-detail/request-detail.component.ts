import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RequestService } from '../../services/request.service';
import { Request } from '../../modules/request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit, OnDestroy {
  public requestDetails: Request;
  public targetConfList = [];

  public ppmPerFg = true;
  public fgPerPpm = false;
  public fgOnly = false;
  public ppmOnly = false;

  public races2016: Array<any>;
  public races2017: Array<any>;
  private race2016Subscription;
  private race2017Subscription;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.loadRequestDetails(params.requestId));
    //
    // Load mock data.
    this.targetConfList = this.getTargetConfigurationData();
    //
    // Load F1 races.
    this.race2017Subscription = this.requestService.getRaces(2017, 4000).subscribe(races => this.races2017 = races);
    this.race2016Subscription = this.requestService.getRaces(2016).subscribe(races => this.races2016 = races);
    console.log('this.race2017Subscription=', this.race2017Subscription);
  }

  ngOnDestroy() {
    this.race2016Subscription.unsubscribe();
    this.race2017Subscription.unsubscribe();
    console.log('this.race2017Subscription=', this.race2017Subscription);
  }

  private loadRequestDetails(requestId) {
    if (requestId) {
      this.requestService.getRequest(requestId)
        .subscribe(request => this.requestDetails = request[0]);
      }
  }

  private getTargetConfigurationData() {
    const tc = [];
    tc.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'ACTEMRA',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Small', 'MAKEUP': 'DE', 'PLANT_STATUS': 'Production',
      'SHELF_LIVE': this.genShelfLive()});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'In Assessment', 'ACTIONS': 'RF', 'PI_NO': this.genId() + ', ' + this.genId(),
      'MAKEUP': 'DE', 'MATERIAL': 'FBPR', 'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'BPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'Planing', 'ACTIONS': 'RF', 'PI_NO': this.genId(),
      'MAKEUP': 'DE', 'MATERIAL': 'LEAF', 'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'TSPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'Proof Read', 'ACTIONS': 'RF', 'PI_NO': this.genId(),
      'MAKEUP': 'DE', 'MATERIAL': 'LEAF', 'PACK_SITE': '120111, F. Hoffmann-La Roche AG, Mannheim'});
    //
    tc.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'ACTEMRA',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'FR', 'PLANT_STATUS': 'Draft',
      'SHELF_LIVE': this.genShelfLive()});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'TSPR', 'PROD_FAM': 'ACTEMRA',
      'PPM_STATUS': 'Proof Read', 'ACTIONS': 'FRTO', 'PI_NO': this.genId(),
      'MAKEUP': 'FR', 'MATERIAL': 'FBPR', 'PACK_SITE': '120107, F. Hoffmann-La Roche AG, Paris'});
    //
    tc.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'IBALIZUMAB',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'DE', 'PLANT_STATUS': 'Review',
      'SHELF_LIVE': this.genShelfLive()});
    //
    tc.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'APITOLISIB',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'CH', 'PLANT_STATUS': 'Approval',
      'SHELF_LIVE': this.genShelfLive()});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'TSPR', 'PROD_FAM': 'APITOLISIB',
      'PPM_STATUS': 'Proof Read', 'ACTIONS': 'DHE', 'PI_NO': this.genId() + ', ' + this.genId(),
       'MAKEUP': 'CH', 'MATERIAL': 'FOLD',
      'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'BPR', 'PROD_FAM': 'APITOLISIB',
      'PPM_STATUS': 'In Detailing', 'ACTIONS': 'CKI', 'PI_NO': this.genId(), 'MAKEUP': 'CH',
       'MATERIAL': 'LEAF', 'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FPR', 'PROD_FAM': 'APITOLISIB',
      'PPM_STATUS': 'PDF Printing', 'ACTIONS': 'OK', 'PI_NO': this.genId() + ', 3457745, ' + this.genId(),
      'MAKEUP': 'CH', 'MATERIAL': 'FBPR', 'PACK_SITE': '120103, F. Hoffmann-La Roche AG, Kaiseraugst'});
    //
    tc.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'CELLCEPT',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Medium', 'MAKEUP': 'AUT', 'PLANT_STATUS': 'Production',
       'SHELF_LIVE': this.genShelfLive()});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FBPR', 'PROD_FAM': 'CELLCEPT',
      'PPM_STATUS': 'In Assessment', 'ACTIONS': 'RF', 'PI_NO': this.genId() + ', ' + this.genId(),
       'MAKEUP': 'AUT', 'MATERIAL': 'LEAF', 'PACK_SITE': '120112, F. Hoffmann-La Roche AG, Wien'});
    tc.push({'TYPE': 'PPM', 'ID': this.genId(), 'IMPACTED': 'FBPR3', 'PROD_FAM': 'CELLCEPT',
      'PPM_STATUS': 'In Detailing', 'ACTIONS': 'RFB', 'PI_NO': this.genId() + ', ' + this.genId(),
      'MAKEUP': 'AUT', 'MATERIAL': 'FBPR', 'PACK_SITE': '120112, F. Hoffmann-La Roche AG, Wien'});
    //
    return tc;
  }

  private genId () {
    return Math.floor(Math.random() * 999999);
  }

  private genShelfLive () {
    return Math.floor(Math.random() * 24) + 6;
  }
}
