import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down-timer-subject',
  templateUrl: './count-down-timer-subject.component.html',
  styleUrls: ['./count-down-timer-subject.component.css'],
})
export class CountDownTimerSubjectComponent implements OnInit, OnDestroy {
  timerLimit: number = 0;
  timerSubsciption: Subscription;
  constructor(private countDownService: CountDownEnhancedService) {}

  ngOnInit(): void {
    this.timerSubsciption = this.countDownService.timer$.subscribe(
      ({ timerLimit }) => (this.timerLimit = timerLimit)
    );
  }

  ngOnDestroy() {
    this.timerSubsciption.unsubscribe();
  }
}
