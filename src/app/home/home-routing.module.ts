import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PruebaComponent } from '../components/prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dalton',
    loadChildren : () => import('../dalton/dalton.module').then( m => m.DaltonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
