import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownEnhancedComponent } from './pages/count-down-enhanced/count-down-enhanced.component';
import { Routes, RouterModule } from '@angular/router';
import { CountDownCountSubjectComponent } from './components/count-down-count-subject/count-down-count-subject.component';
import { CountDownLimitSubjectComponent } from './components/count-down-limit-subject/count-down-limit-subject.component';
import { CountDownLogSubjectComponent } from './components/count-down-log-subject/count-down-log-subject.component';
import { CountDownTimerSubjectComponent } from './components/count-down-timer-subject/count-down-timer-subject.component';

const routes: Routes = [
  {
    path: '',
    component: CountDownEnhancedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [
    CountDownEnhancedComponent,
    CountDownCountSubjectComponent,
    CountDownLimitSubjectComponent,
    CountDownLogSubjectComponent,
    CountDownTimerSubjectComponent,
  ],
})
export class CountDownEnhancedModule {}
