import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefeicaoUserPage } from './refeicao-user.page';

const routes: Routes = [
  {
    path: '',
    component: RefeicaoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefeicaoUserPageRoutingModule {}
