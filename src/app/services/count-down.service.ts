import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CountDownService {
  private countDownLogs: string[] = [];
  private startedCounter: number = 0;
  private pausedCounter: number = 0;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  generateLogs(countDown: { type: string; timeStamp: number }): void {
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
  }
  getLogs() {
    return this.countDownLogs;
  }
  getCounter() {
    return { start: this.startedCounter, pause: this.pausedCounter };
  }
  resetLogs() {
    this.countDownLogs = [];
    this.startedCounter = 0;
    this.pausedCounter = 0;
  }
}
