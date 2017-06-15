import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanProvider } from '../../providers/plan/plan';
import { CourseDatailPage } from '../course-datail/course-datail';
import { ReservePage } from '../reserve/reserve';

@IonicPage()
@Component({
  selector: 'page-plan-detail',
  templateUrl: 'plan-detail.html',
})
export class PlanDetailPage {
  planNo: number = null;
  courseNo: number = null;
  title: string = '';
  image: string = '';

  spotList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private planProvider: PlanProvider) {
  }

  ionViewDidLoad() {
    this.planNo = this.navParams.get('id');
    this.title = this.navParams.get('title');
    this.image = this.navParams.get('image');
    this.getPlanDetail();
  }

  getPlanDetail() {
    this.planProvider.getPlanDetail(this.planNo)
    .subscribe(
      data => {
        this.spotList = data.json().spot;
        this.courseNo = data.json().courseNo;
      }
    );
  }

  goReserve(title) {
    this.navCtrl.push(ReservePage, {title: title});
  }

  editPlan() {
    this.navCtrl.push(CourseDatailPage, {"courseNo": this.courseNo, "image": this.image, "title": this.title, "planNo": this.planNo});
  }
}
