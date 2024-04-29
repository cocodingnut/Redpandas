import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoutDirectiveComponent } from './timeout-directive.component';

describe('TimeoutDirectiveComponent', () => {
  let component: TimeoutDirectiveComponent;
  let fixture: ComponentFixture<TimeoutDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeoutDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
