import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosUserPage } from './servicos-user.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosUserPageRoutingModule {}
