import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {DataTableModule} from "angular2-datatable";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocoComponent } from './coco/coco.component';
import { ImcoComponent } from './imco/imco.component';
import { TaliComponent } from './tali/tali.component';
import { TaskListComponent } from './tali/task-list/task-list.component';

import { TaskService } from './services/task.service';
import { CorqComponent } from './coco/corq/corq.component';
import { Ng2TableDemoComponent } from './ng2-table-demo/ng2-table-demo.component';
import { Ng2DatatableComponent } from './ng2-datatable/ng2-datatable.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    Ng2TableModule,
    DataTableModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
