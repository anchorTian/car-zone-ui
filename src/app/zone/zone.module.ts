import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneComponent } from './zone.component';
import { MyFavourComponent } from './my-favour/my-favour.component';

@NgModule({
  imports: [
    CommonModule,
    ZoneRoutingModule
  ],
  declarations: [
    MyFavourComponent,
    ZoneComponent
  ]
})
export class ZoneModule { }
