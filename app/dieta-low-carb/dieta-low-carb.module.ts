import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaLowCarbPageRoutingModule } from './dieta-low-carb-routing.module';

import { DietaLowCarbPage } from './dieta-low-carb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaLowCarbPageRoutingModule
  ],
  declarations: [DietaLowCarbPage]
})
export class DietaLowCarbPageModule {}
