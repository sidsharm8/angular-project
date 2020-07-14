import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownLogSubjectComponent } from './count-down-log-subject.component';

describe('CountDownLogSubjectComponent', () => {
  let component: CountDownLogSubjectComponent;
  let fixture: ComponentFixture<CountDownLogSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownLogSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownLogSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
