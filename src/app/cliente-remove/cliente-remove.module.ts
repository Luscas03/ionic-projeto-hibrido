import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteRemovePageRoutingModule } from './cliente-remove-routing.module';

import { ClienteRemovePage } from './cliente-remove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteRemovePageRoutingModule
  ],
  declarations: [ClienteRemovePage]
})
export class ClienteRemovePageModule {}
