import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRecuperarPage } from './login-recuperar.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRecuperarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRecuperarPageRoutingModule {}
