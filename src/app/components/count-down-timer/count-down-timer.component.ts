import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit {
  @Input() timerLimit: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
