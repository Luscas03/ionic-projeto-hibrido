import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteTestePage } from './cliente-teste.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteTestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteTestePageRoutingModule {}
