import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaVisualizarPage } from './consulta-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaVisualizarPageRoutingModule {}
