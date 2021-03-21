import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaVisualizarPageRoutingModule } from './dieta-visualizar-routing.module';

import { DietaVisualizarPage } from './dieta-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaVisualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DietaVisualizarPage]
})
export class DietaVisualizarPageModule {}
