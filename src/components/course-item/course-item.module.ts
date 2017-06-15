import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseItemComponent } from './course-item';
import { Square } from '../../directives/square/square';
import { SquareModule } from '../../directives/square/square.module';

@NgModule({
  declarations: [
    CourseItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(CourseItemComponent),
    SquareModule
  ],
  exports: [
    CourseItemComponent
  ]
})
export class CourseItemComponentModule {}
