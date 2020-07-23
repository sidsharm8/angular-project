import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownEnhancedComponent } from './count-down-enhanced.component';

describe('CountDownEnhancedComponent', () => {
  let component: CountDownEnhancedComponent;
  let fixture: ComponentFixture<CountDownEnhancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownEnhancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownEnhancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
