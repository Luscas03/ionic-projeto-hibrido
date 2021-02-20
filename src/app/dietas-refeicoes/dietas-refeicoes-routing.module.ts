import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietasRefeicoesPage } from './dietas-refeicoes.page';

const routes: Routes = [
  {
    path: '',
    component: DietasRefeicoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietasRefeicoesPageRoutingModule {}
