import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaRemovePage } from './consulta-remove.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaRemovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaRemovePageRoutingModule {}
