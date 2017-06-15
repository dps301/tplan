import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailPage } from './hotel-detail';
import { MapComponentModule } from '../../components/map/map.module';

@NgModule({
  declarations: [
    HotelDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailPage),
    MapComponentModule
  ],
  exports: [
    HotelDetailPage
  ]
})
export class HotelDetailPageModule {}
