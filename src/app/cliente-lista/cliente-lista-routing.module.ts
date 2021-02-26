import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListaPage } from './cliente-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteListaPageRoutingModule {}
