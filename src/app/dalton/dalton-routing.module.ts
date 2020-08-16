import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaltonPage } from './dalton.page';

const routes: Routes = [
  {
    path: '',
    component: DaltonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaltonPageRoutingModule {}
