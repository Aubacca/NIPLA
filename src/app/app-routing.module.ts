import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocoComponent } from './coco/coco.component';
import { CorqComponent } from './coco/corq/corq.component';
import { TaliComponent } from './tali/tali.component';
import { ImcoComponent } from './imco/imco.component';

const routes: Routes = [
  {path: '', children: []},
  {path: 'coco', component: CocoComponent},
  {path: 'corq/:id', component: CorqComponent},
  {path: 'tali', component: TaliComponent},
  {path: 'imco', component: ImcoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
