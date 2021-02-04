import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCadastroPage } from './cliente-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCadastroPageRoutingModule {}
