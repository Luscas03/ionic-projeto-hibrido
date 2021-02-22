import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcarConsultaPage } from './marcar-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: MarcarConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcarConsultaPageRoutingModule {}
