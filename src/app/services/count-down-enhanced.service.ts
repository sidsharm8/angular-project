import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CountDownEnhancedService {
  private logsSource = new Subject<string[]>();
  private counterSource = new Subject<{ start: number; pause: number }>();
  private timerSource = new Subject<{ timerLimit: number }>();

  private countDownLogs: string[] = [];
  private startedCounter: number = 0;
  private pausedCounter: number = 0;

  logs$ = this.logsSource.asObservable();
  counter$ = this.counterSource.asObservable();
  timer$ = this.timerSource.asObservable();

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  pushLogs(countDown: { type: string; timeStamp: number }) {
    const formattedDate = formatDate(
      countDown.timeStamp,
      'd-M-yy h:mm:ss a',
      this.locale
    );
    if (countDown.type === 'start') {
      this.startedCounter = this.startedCounter + 1;

      this.countDownLogs.push(`Started at ${formattedDate}`);
    } else {
      this.pausedCounter = this.pausedCounter + 1;
      this.countDownLogs.push(`Paused at ${formattedDate}`);
    }
    this.counterSource.next({
      start: this.startedCounter,
      pause: this.pausedCounter,
    });
    this.logsSource.next(this.countDownLogs);
  }

  triggerTimer(timer: { timerLimit: number }) {
    this.timerSource.next(timer);
  }
  resetLogs() {
    this.countDownLogs = [];
    this.startedCounter = 0;
    this.pausedCounter = 0;

    this.logsSource.next(this.countDownLogs);
    this.counterSource.next({
      start: this.startedCounter,
      pause: this.pausedCounter,
    });
  }
}
