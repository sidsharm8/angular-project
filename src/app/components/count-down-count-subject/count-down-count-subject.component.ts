import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-count-down-count-subject',
  templateUrl: './count-down-count-subject.component.html',
  styleUrls: ['./count-down-count-subject.component.css'],
})
export class CountDownCountSubjectComponent implements OnInit, OnDestroy {
  counter: { start: number; pause: number } = { start: 0, pause: 0 };
  counterSubscription: Subscription;
  constructor(private countDownService: CountDownEnhancedService) {}

  ngOnInit(): void {
    this.counterSubscription = this.countDownService.$data.subscribe(
      ({ countDownTimer: { timer } }) => this.generateCounter(timer)
    );
  }
  generateCounter(timer) {
    const { type } = timer;
    switch (type) {
      case 'start':
        this.counter.start = this.counter.start + 1;
        break;
      case 'pause':
        this.counter.pause = this.counter.pause + 1;
        break;
      case 'reset':
        this.counter = {
          start: 0,
          pause: 0,
        };
        break;
      default:
    }
  }
  
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
