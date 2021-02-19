import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteClientePage } from './teste-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: TesteClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteClientePageRoutingModule {}
