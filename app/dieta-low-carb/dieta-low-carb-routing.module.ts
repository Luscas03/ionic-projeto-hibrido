import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietaLowCarbPage } from './dieta-low-carb.page';

const routes: Routes = [
  {
    path: '',
    component: DietaLowCarbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietaLowCarbPageRoutingModule {}
