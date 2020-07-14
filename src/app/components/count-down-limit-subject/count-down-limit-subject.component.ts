import { Component, OnInit } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
@Component({
  selector: 'app-count-down-limit-subject',
  templateUrl: './count-down-limit-subject.component.html',
  styleUrls: ['./count-down-limit-subject.component.css'],
})
export class CountDownLimitSubjectComponent implements OnInit {
  isStarted: boolean = false;
  timerInProgress: number;
  timerLimit: number = 0;
  constructor(private countDownEnhancedService: CountDownEnhancedService) {}

  ngOnInit(): void {}

  start(timerLimit: string) {
    this.isStarted = true;
    this.timerLimit = this.timerLimit || Number(timerLimit);
    this.countDownEnhancedService.triggerTimer({
      timerLimit: this.timerLimit,
    });
    this.countDownEnhancedService.pushLogs({
      type: 'start',
      timeStamp: Date.now(),
    });
    clearTimeout(this.timerInProgress);
    this.startTimer();
  }

  startTimer() {
    //keep pushing values every 1000 ms
    let componentRef = this;
    this.timerInProgress = setTimeout(function timerCb() {
      //recursive timeout
      componentRef.timerLimit = componentRef.timerLimit - 1;
      componentRef.countDownEnhancedService.triggerTimer({
        timerLimit: componentRef.timerLimit,
      });
      componentRef.timerInProgress = setTimeout(timerCb, 1000);
    }, 1000);
  }
  pause() {
    this.isStarted = false;
    clearTimeout(this.timerInProgress);
    //emit one final time
    this.countDownEnhancedService.triggerTimer({
      timerLimit: this.timerLimit,
    });
    this.countDownEnhancedService.pushLogs({
      type: 'pause',
      timeStamp: Date.now(),
    });
  }

  reset(timerLimit: HTMLInputElement) {
    timerLimit.value = '';
    this.isStarted = false;
    clearTimeout(this.timerInProgress);
    this.timerLimit = 0;
    this.countDownEnhancedService.triggerTimer({
      timerLimit: this.timerLimit,
    });
    this.countDownEnhancedService.resetLogs();
  }
}
