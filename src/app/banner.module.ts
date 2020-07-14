import { NgModule } from '@angular/core';
import { BannerComponent } from './pages/banner/banner.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BannerComponent],
})
export class BannerModule {}
