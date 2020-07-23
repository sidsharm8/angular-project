import { NgModule } from '@angular/core';
import { ListComponent } from './pages/list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { SortListPipe } from './pages/list/sort.pipe';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  declarations: [ListComponent, SortListPipe],
})
export class ListModule {}
