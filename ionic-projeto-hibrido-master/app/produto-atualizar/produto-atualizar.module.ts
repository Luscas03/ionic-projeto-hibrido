import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoAtualizarPageRoutingModule } from './produto-atualizar-routing.module';

import { ProdutoAtualizarPage } from './produto-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoAtualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoAtualizarPage]
})
export class ProdutoAtualizarPageModule {}
