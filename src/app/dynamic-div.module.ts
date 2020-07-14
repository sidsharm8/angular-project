import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './pages/dynamic-div/dynamic-div.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [DynamicDivComponent],
})
export class DynamicDivModule {}
