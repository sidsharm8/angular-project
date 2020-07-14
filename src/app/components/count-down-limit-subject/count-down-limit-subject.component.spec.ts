import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownLimitSubjectComponent } from './count-down-limit-subject.component';

describe('CountDownLimitSubjectComponent', () => {
  let component: CountDownLimitSubjectComponent;
  let fixture: ComponentFixture<CountDownLimitSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownLimitSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownLimitSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
