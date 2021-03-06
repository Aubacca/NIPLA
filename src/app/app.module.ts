import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 3rd party.
import { AlertModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DataTableModule } from 'angular2-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

// App routing.
import { AppRoutingModule } from './app-routing.module';
// App servies.
import { EventActionsService } from './services/event-actions.service';
import { RequestService } from './services/request.service';
import { TaskService } from './services/task.service';
// App components.
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ActionOverviewComponent } from './coco/action-overview/action-overview.component';
import { AdditionalInformationComponent } from './tali/tasks/additional-information/additional-information.component';
import { BundlingOverviewComponent } from './coco/bundling-overview/bundling-overview.component';
import { CocoComponent } from './coco/coco.component';
import { CorqComponent } from './coco/corq/corq.component';
import { HomeComponent } from './home/home.component';
import { ImcoComponent } from './imco/imco.component';
import { Ng2DatatableComponent } from './demo/ng2-datatable/ng2-datatable.component';
import { Ng2TableDemoComponent } from './demo/ng2-table-demo/ng2-table-demo.component';
import { ParentOverviewComponent } from './coco/parent-overview/parent-overview.component';
import { RemaComponent } from './rema/rema.component';
import { RequestDetailComponent } from './coco/request-detail/request-detail.component';
import { RequestDetailFgComponent } from './coco/request-detail/shared/request-detail-fg/request-detail-fg.component';
import { RequestDetailPpmComponent } from './coco/request-detail/shared/request-detail-ppm/request-detail-ppm.component';
import { RequestDetailViewComponent } from './tali/tasks/shared/request-detail-view/request-detail-view.component';
import { RequestOverviewComponent } from './coco/request-overview/request-overview.component';
import { TaliComponent } from './tali/tali.component';
import { TaskAssignedDocsComponent } from './tali/tasks/shared/task-assigned-docs/task-assigned-docs.component';
import { TaskHeaderComponent } from './tali/tasks/shared/task-header/task-header.component';
import { TaskListComponent } from './tali/task-list/task-list.component';
import { TechnicalAssessmentComponent } from './tali/tasks/technical-assessment/technical-assessment.component';
import { JqxGritSampleComponent } from './demo/jqx-grit-sample/jqx-grit-sample.component';

@NgModule({
  declarations: [
    ActionOverviewComponent,
    AboutComponent,
    AdditionalInformationComponent,
    AppComponent,
    BundlingOverviewComponent,
    CocoComponent,
    CorqComponent,
    HomeComponent,
    ImcoComponent,
    Ng2DatatableComponent,
    Ng2TableDemoComponent,
    ParentOverviewComponent,
    RemaComponent,
    RequestOverviewComponent,
    RequestDetailComponent,
    RequestDetailFgComponent,
    RequestDetailPpmComponent,
    RequestDetailViewComponent,
    TaliComponent,
    TaskListComponent,
    TaskAssignedDocsComponent,
    TechnicalAssessmentComponent,
    jqxGridComponent,
    JqxGritSampleComponent,
    TaskHeaderComponent
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
    DataTableModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    EventActionsService,
    RequestService,
    TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
