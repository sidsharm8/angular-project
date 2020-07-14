import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownCountComponent } from './count-down-count.component';

describe('CountDownCountComponent', () => {
  let component: CountDownCountComponent;
  let fixture: ComponentFixture<CountDownCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
