import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietaCetogenicaPage } from './dieta-cetogenica.page';

const routes: Routes = [
  {
    path: '',
    component: DietaCetogenicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietaCetogenicaPageRoutingModule {}
