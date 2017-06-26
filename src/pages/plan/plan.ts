import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanProvider } from '../../providers/plan/plan';
import { PlanDetailPage } from '../plan-detail/plan-detail';

@IonicPage()
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
})
export class PlanPage {

  planList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public planProvider: PlanProvider) {
  }

  ionViewDidLoad() {
    this.getPlan();
  }

  getPlan() {
    this.planProvider.getPlan()
    .subscribe(
      data => {
        this.planList = data.json();
      }
    );
  }

  goDetail(id: number, title: string, image: string) {
    this.navCtrl.push(PlanDetailPage, {id: id, title: title, image: image});
  }
}
