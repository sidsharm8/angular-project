import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit {
  _timerLimit: number = 0;
  private _timerInProgress: number;

  @Input()
  set timer(value: { timerLimit: number; type: string }) {
    const { timerLimit, type } = value;
    clearInterval(this._timerInProgress);

    if (type === 'start') {
      this._timerLimit = this._timerLimit || timerLimit;
      this._timerInProgress = setInterval(() => {
        this._timerLimit = this._timerLimit - 1;
      }, this.interval);
    } else if (type === 'reset') {
      this._timerLimit = 0;
    }
  }

  @Input() interval: number;

  constructor() {}

  ngOnInit(): void {}
}
