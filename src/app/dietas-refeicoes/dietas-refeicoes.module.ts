import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietasRefeicoesPageRoutingModule } from './dietas-refeicoes-routing.module';

import { DietasRefeicoesPage } from './dietas-refeicoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietasRefeicoesPageRoutingModule
  ],
  declarations: [DietasRefeicoesPage]
})
export class DietasRefeicoesPageModule {}
