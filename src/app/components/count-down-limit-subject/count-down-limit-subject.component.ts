import { Component, OnInit } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
@Component({
  selector: 'app-count-down-limit-subject',
  templateUrl: './count-down-limit-subject.component.html',
  styleUrls: ['./count-down-limit-subject.component.css'],
})
export class CountDownLimitSubjectComponent implements OnInit {
  isStarted: boolean = false;
  timerLogs: string[] = [];
  constructor(private countDownEnhancedService: CountDownEnhancedService) {}

  ngOnInit(): void {}

  start(timerLimit: HTMLInputElement) {
    const timerLimitValue = timerLimit.value;
    this.isStarted = true;
    const _timerLimit = Number(timerLimitValue);
    this.countDownEnhancedService.pushData({
      countDownTimer: {
        timer: {
          _timerLimit,
          type: 'start',
        },
        interval: 1000,
      },
    });
    timerLimit.value = '';
  }

  pause() {
    this.isStarted = false;
    const type = 'pause';
    this.countDownEnhancedService.pushData({
      countDownTimer: {
        timer: {
          _timerLimit: null,
          type,
        },
      },
    });
    this.generateLogs(type);
  }

  reset(timerLimit: HTMLInputElement) {
    timerLimit.value = '';
    this.isStarted = false;
    this.countDownEnhancedService.pushData({
      countDownTimer: {
        timer: {
          _timerLimit: null,
          type: 'reset',
        },
      },
    });
  }

  generateLogs(type: string) {
    if (type === 'pause') {
      this.timerLogs.push(
        `Paused at ${this.countDownEnhancedService.timerValue}`
      );
    }
  }
}
