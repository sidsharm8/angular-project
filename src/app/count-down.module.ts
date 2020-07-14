import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './pages/count-down/count-down.component';
import { Routes, RouterModule } from '@angular/router';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { CountDownLimitComponent } from './components/count-down-limit/count-down-limit.component';
import { CountDownLogComponent } from './components/count-down-log/count-down-log.component';
import { CountDownCountComponent } from './components/count-down-count/count-down-count.component';

const routes: Routes = [
  {
    path: '',
    component: CountDownComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [
    CountDownComponent,
    CountDownTimerComponent,
    CountDownLimitComponent,
    CountDownLogComponent,
    CountDownCountComponent,
  ],
})
export class CountDownModule {}
