import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaRemovePageRoutingModule } from './consulta-remove-routing.module';

import { ConsultaRemovePage } from './consulta-remove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaRemovePageRoutingModule,
  ],
  declarations: [ConsultaRemovePage]
})
export class ConsultaRemovePageModule {}
