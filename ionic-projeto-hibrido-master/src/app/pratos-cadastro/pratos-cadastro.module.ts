import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosCadastroPageRoutingModule } from './pratos-cadastro-routing.module';

import { PratosCadastroPage } from './pratos-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosCadastroPageRoutingModule
  ],
  declarations: [PratosCadastroPage]
})
export class PratosCadastroPageModule {}
