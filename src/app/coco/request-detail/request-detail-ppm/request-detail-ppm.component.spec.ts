import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailPpmComponent } from './request-detail-ppm.component';

describe('RequestDetailPpmComponent', () => {
  let component: RequestDetailPpmComponent;
  let fixture: ComponentFixture<RequestDetailPpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailPpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailPpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
