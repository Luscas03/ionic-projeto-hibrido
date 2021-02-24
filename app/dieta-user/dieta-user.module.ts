import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaUserPageRoutingModule } from './dieta-user-routing.module';

import { DietaUserPage } from './dieta-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaUserPageRoutingModule
  ],
  declarations: [DietaUserPage]
})
export class DietaUserPageModule {}
