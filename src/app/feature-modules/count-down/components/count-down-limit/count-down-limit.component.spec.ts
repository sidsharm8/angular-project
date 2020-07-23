import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownLimitComponent } from './count-down-limit.component';

describe('CountDownLimitComponent', () => {
  let component: CountDownLimitComponent;
  let fixture: ComponentFixture<CountDownLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
