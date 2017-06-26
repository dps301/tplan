import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanPage } from './plan';
import { PlanItemComponentModule } from '../../components/plan-item/plan-item.module';
import { PlanDetailPageModule } from '../plan-detail/plan-detail.module';

@NgModule({
  declarations: [
    PlanPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanPage),
    PlanItemComponentModule,
    PlanDetailPageModule
  ],
  exports: [
    PlanPage
  ]
})
export class PlanPageModule {}
