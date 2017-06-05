import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanDetailPage } from './plan-detail';

@NgModule({
  declarations: [
    PlanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanDetailPage),
  ],
  exports: [
    PlanDetailPage
  ]
})
export class PlanDetailPageModule {}
