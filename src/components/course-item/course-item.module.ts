import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseItemComponent } from './course-item';

@NgModule({
  declarations: [
    CourseItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(CourseItemComponent),
  ],
  exports: [
    CourseItemComponent
  ]
})
export class CourseItemComponentModule {}
