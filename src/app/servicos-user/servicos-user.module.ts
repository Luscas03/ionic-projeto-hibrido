import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosUserPageRoutingModule } from './servicos-user-routing.module';

import { ServicosUserPage } from './servicos-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosUserPageRoutingModule
  ],
  declarations: [ServicosUserPage]
})
export class ServicosUserPageModule {}
