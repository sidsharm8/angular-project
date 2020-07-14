import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownLogComponent } from './count-down-log.component';

describe('CountDownLogComponent', () => {
  let component: CountDownLogComponent;
  let fixture: ComponentFixture<CountDownLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
