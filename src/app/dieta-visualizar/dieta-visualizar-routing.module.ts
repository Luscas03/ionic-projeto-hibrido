import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietaVisualizarPage } from './dieta-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: DietaVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietaVisualizarPageRoutingModule {}
