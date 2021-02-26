import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoCadastroPage } from './produto-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoCadastroPageRoutingModule {}
