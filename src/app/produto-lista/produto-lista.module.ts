import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoListaPageRoutingModule } from './produto-lista-routing.module';

import { ProdutoListaPage } from './produto-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoListaPageRoutingModule
  ],
  declarations: [ProdutoListaPage]
})
export class ProdutoListaPageModule {}
