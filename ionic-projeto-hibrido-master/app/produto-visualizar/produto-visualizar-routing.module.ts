import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoVisualizarPage } from './produto-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoVisualizarPageRoutingModule {}
