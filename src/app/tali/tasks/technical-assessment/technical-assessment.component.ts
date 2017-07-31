import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from './../../../services/request.service';
import { TaskService } from './../../../services/task.service';
import { Request } from './../../../models/request';
import { Task } from './../../../models/task';


@Component({
  selector: 'app-technical-assessment',
  templateUrl: './technical-assessment.component.html',
  styleUrls: ['./technical-assessment.component.css']
})
export class TechnicalAssessmentComponent implements OnInit {
  public taskDetail: Task;
  public requestDetail: Request;
  public techDrawingModel = 'NO';
  public targetConfList = [];
  public expandAllTargetConfigs = false;

  public ppmPerFg = true;
  public fgPerPpm = false;
  public fgOnly = false;
  public ppmOnly = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestService: RequestService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.loadTask(params.taskId));
    //
    this.targetConfList = this.getTargetConfigurationData();
  }

  private loadTask(taskId: string) {
    this.taskService.getTask(taskId)
      .subscribe(task => {
        this.taskDetail = task[0];
        this.requestService.getRequest(this.taskDetail.REQUEST)
          .subscribe(request => this.requestDetail = request[0]);
      });
  }

  goToTaskList (e) {
    this.router.navigate(['/tali']);
  }

  private getTargetConfigurationData() {
    const tc = [];
    tc.push({'TYPE': 'FG', 'ID': this.genId(), 'NAME': 'FG-' + this.genId(), 'PROD_FAM': 'ACTEMRA',
      'PACO_ID': this.genId(), 'NORM_PACK': 'Small', 'MAKEUP': 'DE', 'PLANT_STATUS': 'Production',
      'SHELF_LIVE': this.genShelfLive()});
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
