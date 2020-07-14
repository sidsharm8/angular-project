import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerSubjectComponent } from './count-down-timer-subject.component';

describe('CountDownTimerSubjectComponent', () => {
  let component: CountDownTimerSubjectComponent;
  let fixture: ComponentFixture<CountDownTimerSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownTimerSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
