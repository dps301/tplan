import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseDatailPage } from './course-datail';
import { SquareModule } from '../../directives/square/square.module';

@NgModule({
  declarations: [
    CourseDatailPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseDatailPage),
    SquareModule
  ],
  exports: [
    CourseDatailPage
  ]
})
export class CourseDatailPageModule {}
