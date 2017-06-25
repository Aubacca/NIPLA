import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocoComponent } from './coco/coco.component';
import { ImcoComponent } from './imco/imco.component';
import { TaliComponent } from './tali/tali.component';
import { TaskListComponent } from './tali/task-list/task-list.component';

import { TaskService } from './services/task.service';
import { CorqComponent } from './coco/corq/corq.component';

@NgModule({
  declarations: [
    AppComponent,
    CocoComponent,
    ImcoComponent,
    TaliComponent,
    TaskListComponent,
    CorqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
