import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownCountSubjectComponent } from './count-down-count-subject.component';

describe('CountDownCountSubjectComponent', () => {
  let component: CountDownCountSubjectComponent;
  let fixture: ComponentFixture<CountDownCountSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownCountSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownCountSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
