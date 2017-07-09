import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ng2TableDemoComponent } from './ng2-table-demo/ng2-table-demo.component';
import { Ng2DatatableComponent } from './ng2-datatable/ng2-datatable.component';

import { HomeComponent } from './home/home.component'
import { TaliComponent } from './tali/tali.component';
import { ImcoComponent } from './imco/imco.component';
import { AdditionalInformationComponent } from './tasks/additional-information/additional-information.component';
import { CorqComponent } from './coco/corq/corq.component';
import { CocoComponent } from './coco/coco.component';
import { RequestDetailComponent } from './coco/request-detail/request-detail.component'


const routes: Routes = [
  {path: '', children: [], component: HomeComponent},
  {path: 'coco', component: CocoComponent},
  {path: 'coco/requestDetails/:requestId', component: RequestDetailComponent},
  {path: 'corq-task/:id', component: CorqComponent},
  {path: 'corq/:request', component: CorqComponent},
  {path: 'tali', component: TaliComponent},
  {path: 'imco', component: ImcoComponent},
  {path: 'tableDemo', component: Ng2TableDemoComponent},
  {path: 'dataTable', component: Ng2DatatableComponent},
  {path: 'tasks/additionalInformation/:taskId', component: AdditionalInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
