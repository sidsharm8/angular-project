import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountDownEnhancedService {
  timerValue: number = 0;
  private dataSource = new Subject<any>();
  private data: any = {
    countDownTimer: {
      timer: {
        timerLimit: 0,
        type: '',
      },
      interval: 0,
    },
  };

  $data = this.dataSource.asObservable();

  constructor() {}

  pushData(dataToPush: any) {
    const data = {
      ...this.data,
      ...dataToPush,
    };
    this.dataSource.next(data);
  }
}
