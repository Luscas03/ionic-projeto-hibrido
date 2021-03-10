import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoVisualizarPage } from './prato-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PratoVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoVisualizarPageRoutingModule {}
