import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaVisualizarPageRoutingModule } from './consulta-visualizar-routing.module';

import { ConsultaVisualizarPage } from './consulta-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaVisualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConsultaVisualizarPage]
})
export class ConsultaVisualizarPageModule {}
