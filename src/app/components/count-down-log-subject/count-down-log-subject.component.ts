import { Component, OnInit, OnDestroy, Inject, LOCALE_ID } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
import { Subscription } from 'rxjs';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-count-down-log-subject',
  templateUrl: './count-down-log-subject.component.html',
  styleUrls: ['./count-down-log-subject.component.css'],
})
export class CountDownLogSubjectComponent implements OnInit, OnDestroy {
  logs: string[] = [];
  logsSubscription: Subscription;
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private CountDownEnhancedService: CountDownEnhancedService
  ) {}

  ngOnInit(): void {
    this.logsSubscription = this.CountDownEnhancedService.$data.subscribe(
      ({ countDownTimer: { timer } }) => this.generateLogs(timer)
    );
  }
  generateLogs(timer) {
    const { type } = timer;
    const timeStamp = Date.now();
    const formattedDate = formatDate(
      timeStamp,
      'd-M-yy h:mm:ss a',
      this.locale
    );
    switch (type) {
      case 'start':
        this.logs.push(`Started at ${formattedDate}`);
        break;
      case 'pause':
        this.logs.push(`Paused at ${formattedDate}`);
        break;
      case 'reset':
        this.logs = [];
        break;
      default:
      // do nothing
    }
  }
  ngOnDestroy() {
    this.logsSubscription.unsubscribe();
  }
}
