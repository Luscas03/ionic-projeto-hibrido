import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosCadastroPage } from './pratos-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PratosCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosCadastroPageRoutingModule {}
