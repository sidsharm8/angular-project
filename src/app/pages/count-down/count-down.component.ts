import { Component, OnInit } from '@angular/core';
import { CountDownService } from '../../services/count-down.service';
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  timerLimit: number = 0;
  timerLogs: string[] = [];
  logs: string[] = [];
  counter: { start: number; pause: number } = { start: 0, pause: 0 };

  constructor(private countDownService: CountDownService) {}

  ngOnInit(): void {
    this.logs = this.countDownService.getLogs();
    this.counter = this.countDownService.getCounter();
  }

  startTimer(timerLimit: number) {
    this.timerLimit = timerLimit;
    this.logs = this.countDownService.getLogs();
    this.counter = this.countDownService.getCounter();
  }
}
