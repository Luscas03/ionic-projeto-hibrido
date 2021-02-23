import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoRemovePage } from './produto-remove.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoRemovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRemovePageRoutingModule {}
