import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountDownService } from '../../services/count-down.service';
@Component({
  selector: 'app-count-down-limit',
  templateUrl: './count-down-limit.component.html',
  styleUrls: ['./count-down-limit.component.css'],
})
export class CountDownLimitComponent implements OnInit {
  @Output() startTimer = new EventEmitter<number>();
  private timerLimit: number = 0;
  private timeInProgress: number;

  isStarted: boolean = false;

  constructor(private countDownService: CountDownService) {}

  ngOnInit(): void {}

  start(timerLimit: HTMLInputElement) {
    this.isStarted = true;
    this.timerLimit = Number(this.timerLimit || timerLimit.value);
    this.startTimer.emit(this.timerLimit);
    this.generateLogs('start');
    clearTimeout(this.timeInProgress);
    this.countDown();
    timerLimit.value = '';
  }

  countDown() {
    let componentRef = this;
    this.timeInProgress = setTimeout(function timerCb() {
      componentRef.timerLimit = componentRef.timerLimit - 1;
      componentRef.startTimer.emit(componentRef.timerLimit);
      componentRef.timeInProgress = setTimeout(timerCb, 1000);
    }, 1000);
  }
  pause() {
    this.isStarted = false;
    clearTimeout(this.timeInProgress);
    this.generateLogs('pause');
    // emit one final time
    this.startTimer.emit(this.timerLimit);
  }

  reset(timerLimit: HTMLInputElement) {
    timerLimit.value = '';
    this.isStarted = false;
    clearTimeout(this.timeInProgress);
    this.countDownService.resetLogs();
    //emit 0 for value to reset timer
    this.startTimer.emit(0);
  }
  generateLogs(type: string) {
    this.countDownService.generateLogs({
      type,
      timeStamp: Date.now(),
    });
  }
}
