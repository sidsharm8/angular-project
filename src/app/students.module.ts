import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './pages/students-table/students-table.component';
import { Routes, RouterModule } from '@angular/router';
import { SortStudentsPipe } from './pages/students-table/sort-students.pipe';

const routes: Routes = [
  {
    path: '',
    component: StudentsTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [StudentsTableComponent, SortStudentsPipe],
  providers: [],
})
export class StudentsModule {}
