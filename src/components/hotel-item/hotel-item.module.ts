import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelItemComponent } from './hotel-item';

@NgModule({
  declarations: [
    HotelItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(HotelItemComponent),
  ],
  exports: [
    HotelItemComponent
  ]
})
export class HotelItemComponentModule {}
