import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpupdateTaskPageRoutingModule } from './spupdate-task-routing.module';

import { SpupdateTaskPage } from './spupdate-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpupdateTaskPageRoutingModule
  ],
  declarations: [SpupdateTaskPage]
})
export class SpupdateTaskPageModule {}
