import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarConsultaPageRoutingModule } from './marcar-consulta-routing.module';

import { MarcarConsultaPage } from './marcar-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarConsultaPageRoutingModule
  ],
  declarations: [MarcarConsultaPage]
})
export class MarcarConsultaPageModule {}
