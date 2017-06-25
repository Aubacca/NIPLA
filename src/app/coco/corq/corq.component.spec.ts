import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorqComponent } from './corq.component';

describe('CorqComponent', () => {
  let component: CorqComponent;
  let fixture: ComponentFixture<CorqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
