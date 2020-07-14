import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DynamicDivComponent } from './pages/dynamic-div/dynamic-div.component';
import { StudentsTableComponent } from './pages/students-table/students-table.component';
import { CountDownComponent } from './pages/count-down/count-down.component';
import { CountDownEnhancedComponent } from './pages/count-down-enhanced/count-down-enhanced.component';

const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner.module').then((m) => m.BannerModule),
    pathMatch: 'full',
  },
  {
    path: 'product-list',
    loadChildren: () => import('./list.module').then((m) => m.ListModule),
    component: ListComponent,
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./dynamic-div.module').then((m) => m.DynamicDivModule),
    component: DynamicDivComponent,
  },
  {
    path: 'students-table',
    loadChildren: () =>
      import('./students.module').then((m) => m.StudentsModule),
    component: StudentsTableComponent,
  },
  {
    path: 'count-down',
    loadChildren: () =>
      import('./count-down.module').then((m) => m.CountDownModule),
    component: CountDownComponent,
  },
  {
    path: 'count-down-2',
    loadChildren: () =>
      import('./count-down-enhanced.module').then(
        (m) => m.CountDownEnhancedModule
      ),
    component: CountDownEnhancedComponent,
  },
  {
    path: '**',
    redirectTo: 'banner',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
