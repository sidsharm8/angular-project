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
    loadChildren: () =>
      import('./feature-modules/banner/banner.module').then(
        (m) => m.BannerModule
      ),
  },
  {
    path: 'product-list',
    loadChildren: () =>
      import('./feature-modules/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./feature-modules/dynamic-div/dynamic-div.module').then(
        (m) => m.DynamicDivModule
      ),
  },
  {
    path: 'students-table',
    loadChildren: () =>
      import('./feature-modules/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: 'count-down',
    loadChildren: () =>
      import('./feature-modules/count-down/count-down.module').then(
        (m) => m.CountDownModule
      ),
  },
  {
    path: 'count-down-2',
    loadChildren: () =>
      import(
        './feature-modules/count-down-enhanced/count-down-enhanced.module'
      ).then((m) => m.CountDownEnhancedModule),
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
