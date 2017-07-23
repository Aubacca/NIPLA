import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemaComponent } from './rema.component';

describe('RemaComponent', () => {
  let component: RemaComponent;
  let fixture: ComponentFixture<RemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
