import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-count-down-count-subject',
  templateUrl: './count-down-count-subject.component.html',
  styleUrls: ['./count-down-count-subject.component.css'],
})
export class CountDownCountSubjectComponent implements OnInit, OnDestroy {
  counter: { start: number; pause: number } = { start: 0, pause: 0 };
  counterSubscription: Subscription;
  constructor(private countDownService: CountDownEnhancedService) {}

  ngOnInit(): void {
    this.counterSubscription = this.countDownService.counter$.subscribe(
      (counter) => (this.counter = counter)
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
