import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoRemovePage } from './prato-remove.page';

const routes: Routes = [
  {
    path: '',
    component: PratoRemovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoRemovePageRoutingModule {}
