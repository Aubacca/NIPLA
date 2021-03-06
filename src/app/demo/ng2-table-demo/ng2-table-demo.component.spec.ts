import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TableDemoComponent } from './ng2-table-demo.component';

describe('Ng2TableDemoComponent', () => {
  let component: Ng2TableDemoComponent;
  let fixture: ComponentFixture<Ng2TableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2TableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
