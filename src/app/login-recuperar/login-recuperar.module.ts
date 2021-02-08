import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRecuperarPageRoutingModule } from './login-recuperar-routing.module';

import { LoginRecuperarPage } from './login-recuperar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRecuperarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginRecuperarPage]
})
export class LoginRecuperarPageModule {}
