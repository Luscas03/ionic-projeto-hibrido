import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietaUserPage } from './dieta-user.page';

const routes: Routes = [
  {
    path: '',
    component: DietaUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietaUserPageRoutingModule {}
