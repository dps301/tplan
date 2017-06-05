import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursePage } from './course';
import { CourseItemComponentModule } from '../../components/course-item/course-item.module';
import { CourseDatailPageModule } from '../course-datail/course-datail.module';

@NgModule({
  declarations: [
    CoursePage,
  ],
  imports: [
    IonicPageModule.forChild(CoursePage),
    CourseItemComponentModule,
    CourseDatailPageModule
  ],
  exports: [
    CoursePage
  ]
})
export class CoursePageModule {}
