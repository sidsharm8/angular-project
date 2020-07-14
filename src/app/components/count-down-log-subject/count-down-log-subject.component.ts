import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountDownEnhancedService } from '../../services/count-down-enhanced.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-count-down-log-subject',
  templateUrl: './count-down-log-subject.component.html',
  styleUrls: ['./count-down-log-subject.component.css'],
})
export class CountDownLogSubjectComponent implements OnInit, OnDestroy {
  logs: string[] = [];
  logsSubscription: Subscription;
  constructor(private CountDownEnhancedService: CountDownEnhancedService) {}

  ngOnInit(): void {
    this.CountDownEnhancedService.logs$.subscribe((logs) => (this.logs = logs));
  }

  ngOnDestroy() {
    this.logsSubscription.unsubscribe();
  }
}
