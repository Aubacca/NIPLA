import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxGritSampleComponent } from './jqx-grit-sample.component';

describe('JqxGritSampleComponent', () => {
  let component: JqxGritSampleComponent;
  let fixture: ComponentFixture<JqxGritSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxGritSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxGritSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
