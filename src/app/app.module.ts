import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DataTableModule } from 'angular2-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocoComponent } from './coco/coco.component';
import { ImcoComponent } from './imco/imco.component';
import { TaliComponent } from './tali/tali.component';
import { TaskListComponent } from './tali/task-list/task-list.component';

import { RequestService } from './services/request.service';
import { TaskService } from './services/task.service';
import { CorqComponent } from './coco/corq/corq.component';
import { Ng2TableDemoComponent } from './ng2-table-demo/ng2-table-demo.component';
import { Ng2DatatableComponent } from './ng2-datatable/ng2-datatable.component';
import { HomeComponent } from './home/home.component';
import { AdditionalInformationComponent } from './tasks/additional-information/additional-information.component';
import { ActionOverviewComponent } from './coco/action-overview/action-overview.component';
import { ParentOverviewComponent } from './coco/parent-overview/parent-overview.component';
import { RequestOverviewComponent } from './coco/request-overview/request-overview.component';
import { BundlingOverviewComponent } from './coco/bundling-overview/bundling-overview.component';
import { RequestDetailComponent } from './coco/request-detail/request-detail.component';
import { TechnicalAssessmentComponent } from './tasks/technical-assessment/technical-assessment.component';
import { RequestDetailFgComponent } from './coco/request-detail/request-detail-fg/request-detail-fg.component';
import { RequestDetailPpmComponent } from './coco/request-detail/request-detail-ppm/request-detail-ppm.component';
import { RequestDetailViewComponent } from './tasks/request-detail-view/request-detail-view.component';
import { TaskAssignedDocsComponent } from './tasks/task-assigned-docs/task-assigned-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    CocoComponent,
    ImcoComponent,
    TaliComponent,
    TaskListComponent,
    CorqComponent,
    Ng2TableDemoComponent,
    Ng2DatatableComponent,
    HomeComponent,
    AdditionalInformationComponent,
    ActionOverviewComponent,
    ParentOverviewComponent,
    RequestOverviewComponent,
    BundlingOverviewComponent,
    RequestDetailComponent,
    TechnicalAssessmentComponent,
    RequestDetailFgComponent,
    RequestDetailPpmComponent,
    RequestDetailViewComponent,
    TaskAssignedDocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    Ng2TableModule,
    DataTableModule
  ],
  providers: [RequestService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
