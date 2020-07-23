import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountDownEnhancedService } from '../../../../services/count-down-enhanced.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down-timer-subject',
  templateUrl: './count-down-timer-subject.component.html',
  styleUrls: ['./count-down-timer-subject.component.css'],
})
export class CountDownTimerSubjectComponent implements OnInit, OnDestroy {
  timerLimit: number = 0;
  interval: number = 1000;
  timerInProgress: number;
  timerSubsciption: Subscription;
  constructor(private countDownService: CountDownEnhancedService) {}

  ngOnInit(): void {
    this.timerLimit = this.countDownService.timerValue;
    this.timerSubsciption = this.countDownService.$data.subscribe(
      ({ countDownTimer: { timer, interval } }) => {
        this.startTimer(timer, interval);
      }
    );
  }

  startTimer(timer, interval) {
    const { _timerLimit, type } = timer;
    clearInterval(this.timerInProgress);
    if (type === 'start') {
      this.timerLimit = this.timerLimit || _timerLimit;
      this.interval = interval;
      this.timerInProgress = setInterval(() => {
        this.timerLimit = this.timerLimit - 1;
        //update the service
        this.countDownService.timerValue = this.timerLimit;
      }, this.interval);
    } else if (type === 'reset') {
      this.timerLimit = 0;
      this.countDownService.timerValue = this.timerLimit;
    }
  }
  ngOnDestroy() {
    this.timerSubsciption.unsubscribe();
  }
}
