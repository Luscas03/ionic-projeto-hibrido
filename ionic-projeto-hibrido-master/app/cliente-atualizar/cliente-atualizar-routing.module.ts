import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteAtualizarPage } from './cliente-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteAtualizarPageRoutingModule {}
