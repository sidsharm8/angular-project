import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-count-down-limit',
  templateUrl: './count-down-limit.component.html',
  styleUrls: ['./count-down-limit.component.css'],
})
export class CountDownLimitComponent implements OnInit {
  @Output() timerChange = new EventEmitter<{
    timerLimit: number;
    type: string;
  }>();
  @Input() timerLogs: string[] = [];

  private timerLimit: number = 0;  
  isStarted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  start(timerLimit: HTMLInputElement) {
    this.isStarted = true;
    this.timerLimit = Number(this.timerLimit || timerLimit.value);
    this.timerChange.emit({ timerLimit: this.timerLimit, type: 'start' });
    timerLimit.value = '';
  }

  pause() {
    this.isStarted = false;
    // emit one final time
    this.timerChange.emit({ timerLimit: this.timerLimit, type: 'pause' });
  }

  reset(timerLimit: HTMLInputElement) {
    this.isStarted = false;
    //emit 0 for value to reset timer
    this.timerChange.emit({ timerLimit: 0, type: 'reset' });
    timerLimit.value = '';
  }
}
