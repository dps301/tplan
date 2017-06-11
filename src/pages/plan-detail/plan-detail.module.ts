import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanDetailPage } from './plan-detail';
import { ReservePageModule } from '../reserve/reserve.module';

@NgModule({
  declarations: [
    PlanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanDetailPage),
    ReservePageModule
  ],
  exports: [
    PlanDetailPage
  ]
})
export class PlanDetailPageModule {}
