import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservePage } from './reserve';
import { CourseItemComponentModule } from '../../components/course-item/course-item.module';
import { HotelItemComponentModule } from '../../components/hotel-item/hotel-item.module';
import { HotelDetailPageModule } from '../hotel-detail/hotel-detail.module';

@NgModule({
  declarations: [
    ReservePage,
  ],
  imports: [
    IonicPageModule.forChild(ReservePage),
    HotelItemComponentModule,
    CourseItemComponentModule,
    HotelDetailPageModule
  ],
  exports: [
    ReservePage
  ]
})
export class ReservePageModule {}
