import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanItemComponent } from './plan-item';

@NgModule({
  declarations: [
    PlanItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(PlanItemComponent),
  ],
  exports: [
    PlanItemComponent
  ]
})
export class PlanItemComponentModule {}
