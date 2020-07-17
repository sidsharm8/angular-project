import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'banner',
    loadChildren: () => import('./banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./list.module').then((m) => m.ListModule),
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./dynamic-div.module').then((m) => m.DynamicDivModule),
  },
  {
    path: 'students-table',
    loadChildren: () =>
      import('./students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'count-down',
    loadChildren: () =>
      import('./count-down.module').then((m) => m.CountDownModule),
  },
  {
    path: 'count-down-2',
    loadChildren: () =>
      import('./count-down-enhanced.module').then(
        (m) => m.CountDownEnhancedModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
