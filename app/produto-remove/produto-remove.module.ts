import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoRemovePageRoutingModule } from './produto-remove-routing.module';

import { ProdutoRemovePage } from './produto-remove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoRemovePageRoutingModule
  ],
  declarations: [ProdutoRemovePage]
})
export class ProdutoRemovePageModule {}
