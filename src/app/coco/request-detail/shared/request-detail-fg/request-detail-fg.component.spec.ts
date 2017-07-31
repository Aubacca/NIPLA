import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailFgComponent } from './request-detail-fg.component';

describe('RequestDetailFgComponent', () => {
  let component: RequestDetailFgComponent;
  let fixture: ComponentFixture<RequestDetailFgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailFgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
