import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinPage } from './join';
import { CoursePageModule } from '../course/course.module';

@NgModule({
  declarations: [
    JoinPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinPage),
    CoursePageModule
  ],
  exports: [
    JoinPage
  ]
})
export class JoinPageModule {}
