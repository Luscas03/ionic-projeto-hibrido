import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietasServicosPage } from './dietas-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: DietasServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietasServicosPageRoutingModule {}
