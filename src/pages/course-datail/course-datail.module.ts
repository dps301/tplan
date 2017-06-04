import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseDatailPage } from './course-datail';

@NgModule({
  declarations: [
    CourseDatailPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseDatailPage),
  ],
  exports: [
    CourseDatailPage
  ]
})
export class CourseDatailPageModule {}
