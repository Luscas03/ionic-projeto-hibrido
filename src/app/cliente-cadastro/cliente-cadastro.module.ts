import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCadastroPageRoutingModule } from './cliente-cadastro-routing.module';

import { ClienteCadastroPage } from './cliente-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteCadastroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteCadastroPage]
})
export class ClienteCadastroPageModule {}
