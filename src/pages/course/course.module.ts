import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePage } from './course';
import { CourseItemComponentModule } from '../../components/course-item/course-item.module';

@NgModule({
  declarations: [
    CoursePage,
  ],
  imports: [
    IonicPageModule.forChild(CoursePage),
    CourseItemComponentModule
  ],
  exports: [
    CoursePage
  ]
})
export class CoursePageModule {}
