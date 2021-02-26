import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoVisualizarPageRoutingModule } from './produto-visualizar-routing.module';

import { ProdutoVisualizarPage } from './produto-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoVisualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoVisualizarPage]
})
export class ProdutoVisualizarPageModule {}
