import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaCetogenicaPageRoutingModule } from './dieta-cetogenica-routing.module';

import { DietaCetogenicaPage } from './dieta-cetogenica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaCetogenicaPageRoutingModule
  ],
  declarations: [DietaCetogenicaPage]
})
export class DietaCetogenicaPageModule {}
