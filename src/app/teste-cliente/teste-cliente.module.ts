import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteClientePageRoutingModule } from './teste-cliente-routing.module';

import { TesteClientePage } from './teste-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteClientePageRoutingModule
  ],
  declarations: [TesteClientePage]
})
export class TesteClientePageModule {}
