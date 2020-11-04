import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfcategPageRoutingModule } from './infcateg-routing.module';

import { InfcategPage } from './infcateg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfcategPageRoutingModule
  ],
  declarations: [InfcategPage]
})
export class InfcategPageModule {}
