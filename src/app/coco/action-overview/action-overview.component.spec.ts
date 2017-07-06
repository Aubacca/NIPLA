import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionOverviewComponent } from './action-overview.component';

describe('ActionOverviewComponent', () => {
  let component: ActionOverviewComponent;
  let fixture: ComponentFixture<ActionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
