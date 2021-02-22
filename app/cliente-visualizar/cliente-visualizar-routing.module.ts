import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteVisualizarPage } from './cliente-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteVisualizarPageRoutingModule {}
