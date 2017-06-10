import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservePage } from './reserve';
import { CourseItemComponentModule } from '../../components/course-item/course-item.module';

@NgModule({
  declarations: [
    ReservePage,
  ],
  imports: [
    IonicPageModule.forChild(ReservePage),
    CourseItemComponentModule
  ],
  exports: [
    ReservePage
  ]
})
export class ReservePageModule {}
