import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CocoComponent } from './coco/coco.component';
import { CorqComponent } from './coco/corq/corq.component';
import { TaliComponent } from './tali/tali.component';
import { ImcoComponent } from './imco/imco.component';
import { Ng2TableDemoComponent } from './ng2-table-demo/ng2-table-demo.component';
import { Ng2DatatableComponent } from './ng2-datatable/ng2-datatable.component';

const routes: Routes = [
  {path: '', children: [], component: HomeComponent},
  {path: 'coco', component: CocoComponent},
  {path: 'corq/:id', component: CorqComponent},
  {path: 'tali', component: TaliComponent},
  {path: 'imco', component: ImcoComponent},
  {path: 'tableDemo', component: Ng2TableDemoComponent},
  {path: 'dataTable', component: Ng2DatatableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
