import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoListaPage } from './produto-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoListaPageRoutingModule {}
