import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteTestePageRoutingModule } from './cliente-teste-routing.module';

import { ClienteTestePage } from './cliente-teste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteTestePageRoutingModule
  ],
  declarations: [ClienteTestePage]
})
export class ClienteTestePageModule {}
