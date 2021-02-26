import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteRemovePage } from './cliente-remove.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteRemovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRemovePageRoutingModule {}
