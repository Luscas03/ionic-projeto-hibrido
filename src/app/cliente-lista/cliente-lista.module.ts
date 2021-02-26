import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteListaPageRoutingModule } from './cliente-lista-routing.module';

import { ClienteListaPage } from './cliente-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteListaPageRoutingModule
  ],
  declarations: [ClienteListaPage]
})
export class ClienteListaPageModule {}
