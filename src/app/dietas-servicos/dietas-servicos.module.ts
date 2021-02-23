import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietasServicosPageRoutingModule } from './dietas-servicos-routing.module';

import { DietasServicosPage } from './dietas-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietasServicosPageRoutingModule
  ],
  declarations: [DietasServicosPage]
})
export class DietasServicosPageModule {}
