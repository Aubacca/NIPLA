import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaliComponent } from './tali.component';

describe('TaliComponent', () => {
  let component: TaliComponent;
  let fixture: ComponentFixture<TaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
