import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoCadastroPageRoutingModule } from './produto-cadastro-routing.module';

import { ProdutoCadastroPage } from './produto-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoCadastroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoCadastroPage]
})
export class ProdutoCadastroPageModule {}
