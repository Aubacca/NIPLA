import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlingOverviewComponent } from './bundling-overview.component';

describe('BundlingOverviewComponent', () => {
  let component: BundlingOverviewComponent;
  let fixture: ComponentFixture<BundlingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundlingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
