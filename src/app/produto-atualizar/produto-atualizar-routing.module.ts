import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoAtualizarPage } from './produto-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoAtualizarPageRoutingModule {}
