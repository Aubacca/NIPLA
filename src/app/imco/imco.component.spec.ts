import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcoComponent } from './imco.component';

describe('ImcoComponent', () => {
  let component: ImcoComponent;
  let fixture: ComponentFixture<ImcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
