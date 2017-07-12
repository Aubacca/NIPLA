import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailViewComponent } from './request-detail-view.component';

describe('RequestDetailViewComponent', () => {
  let component: RequestDetailViewComponent;
  let fixture: ComponentFixture<RequestDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
