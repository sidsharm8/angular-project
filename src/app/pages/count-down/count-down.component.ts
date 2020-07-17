import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { CountDownTimerComponent } from '../../components/count-down-timer/count-down-timer.component';
type TimerType = {
  timerLimit: number;
  type: string;
};
type LogsType = {
  timerLogs: string[];
  timeStampLogs: string[];
  counterLogs: {
    start: number;
    pause: number;
  };
};
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  timer: TimerType = {
    timerLimit: 0,
    type: 'none',
  };
  logs: LogsType = {
    timerLogs: [],
    timeStampLogs: [],
    counterLogs: { start: 0, pause: 0 },
  };
  interval: number = 1000;

  @ViewChild(CountDownTimerComponent) countDownComp: CountDownTimerComponent;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  ngOnInit(): void {}

  timerChange(timer: TimerType) {
    const { type } = timer;
    this.timer = timer;
    this.generateLogs(type);
  }

  generateLogs(type: string) {
    const timeStamp = Date.now();
    const formattedDate = formatDate(
      timeStamp,
      'd-M-yy h:mm:ss a',
      this.locale
    );
    switch (type) {
      case 'start':
        const {
          counterLogs: { start },
        } = this.logs;
        this.logs.counterLogs.start = start + 1;
        this.logs.timeStampLogs.push(`Started at ${formattedDate}`);
        break;
      case 'pause':
        const {
          counterLogs: { pause },
        } = this.logs;
        this.logs.counterLogs.pause = pause + 1;
        this.logs.timeStampLogs.push(`Paused at ${formattedDate}`);
        this.logs.timerLogs.push(`Paused at ${this.countDownComp._timerLimit}`);
        break;
      case 'reset':
        this.logs = {
          timerLogs: [],
          timeStampLogs: [],
          counterLogs: { start: 0, pause: 0 },
        };
        break;
      default:
      // do nothing
    }
  }
}
