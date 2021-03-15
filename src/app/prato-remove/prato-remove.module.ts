import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoRemovePageRoutingModule } from './prato-remove-routing.module';

import { PratoRemovePage } from './prato-remove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoRemovePageRoutingModule
  ],
  declarations: [PratoRemovePage]
})
export class PratoRemovePageModule {}
