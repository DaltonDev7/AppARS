import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaltonPageRoutingModule } from './dalton-routing.module';

import { DaltonPage } from './dalton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaltonPageRoutingModule
  ],
  declarations: [DaltonPage]
})
export class DaltonPageModule {}
