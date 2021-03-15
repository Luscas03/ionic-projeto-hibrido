import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoVisualizarPageRoutingModule } from './prato-visualizar-routing.module';

import { PratoVisualizarPage } from './prato-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoVisualizarPageRoutingModule,
   ReactiveFormsModule
  ],
  declarations: [PratoVisualizarPage]
})
export class PratoVisualizarPageModule {}
