import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseItemComponent } from './course-item';
import { Square } from '../../directives/square/square';

@NgModule({
  declarations: [
    CourseItemComponent,
    Square
  ],
  imports: [
    IonicPageModule.forChild(CourseItemComponent),
  ],
  exports: [
    CourseItemComponent
  ]
})
export class CourseItemComponentModule {}
