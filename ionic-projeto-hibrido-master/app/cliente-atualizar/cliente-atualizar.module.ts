import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteAtualizarPageRoutingModule } from './cliente-atualizar-routing.module';

import { ClienteAtualizarPage } from './cliente-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAtualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteAtualizarPage]
})
export class ClienteAtualizarPageModule {}
