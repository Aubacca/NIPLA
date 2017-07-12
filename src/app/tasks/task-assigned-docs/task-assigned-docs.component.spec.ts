import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssignedDocsComponent } from './task-assigned-docs.component';

describe('TaskAssignedDocsComponent', () => {
  let component: TaskAssignedDocsComponent;
  let fixture: ComponentFixture<TaskAssignedDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAssignedDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAssignedDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
