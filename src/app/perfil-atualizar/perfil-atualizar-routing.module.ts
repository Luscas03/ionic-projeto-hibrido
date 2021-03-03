import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAtualizarPage } from './perfil-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAtualizarPageRoutingModule {}
