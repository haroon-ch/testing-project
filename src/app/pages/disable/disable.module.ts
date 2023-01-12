import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisablePageRoutingModule } from './disable-routing.module';

import { DisablePage } from './disable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisablePageRoutingModule
  ],
  declarations: [DisablePage]
})
export class DisablePageModule {}
