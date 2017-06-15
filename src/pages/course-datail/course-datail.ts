import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanProvider } from '../../providers/plan/plan';
import { CourseProvider } from '../../providers/course/course';
import * as _ from 'lodash';
import { ViewChild, ChangeDetectorRef } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PlanPage } from '../plan/plan';
import { UtilService } from '../../services/util.service';

@IonicPage()
@Component({
  selector: 'page-course-datail',
  templateUrl: 'course-datail.html',
})
export class CourseDatailPage {
 @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  courseNo: number = 0;
  planNo: number = null;
  image: string = '';
  title: string = '';
  day: number = 3;

  chooseNum: number = 0;
  spotList: Array<any> = [];
  checkedSpotList: Array<any> = [];

  startDt: any = null;
  endDt: any = null;

  selectedIdx: number = -1;
  selectedSpotImage: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private courseProvider: CourseProvider, private planProvider: PlanProvider, private cdRef: ChangeDetectorRef, private util: UtilService) {
  }

  ionViewDidLoad() {
    this.courseNo = this.navParams.get('courseNo');
    this.image = this.navParams.get('image');
    this.title = this.navParams.get('title');
    this.planNo = this.navParams.get('planNo');

    this.startDt = new Date().toISOString();
    this.endDt = new Date().toISOString();

    this.getCourseDetail();
  }

  getCourseDetail() {
    this.courseProvider.getCourseDetail(this.courseNo, this.planNo, this.day)
    .map(data => data.json())
    .subscribe(
      data => {
        this.chooseNum = data.chooseNum;
        if(this.planNo) {
          this.startDt = data.startDt;
          this.endDt = data.endDt;
        }
        this.spotList = _.cloneDeep(data.list);
      }
    );
  }

  addCourseDetail() {
    for (var index = 0; index < this.spotList.length; index++) {
      if(this.spotList[index].checked)
        this.checkedSpotList.push(this.spotList[index]);
    }
    if(new Date(this.startDt) > new Date(this.endDt)) {
      this.util.showAlert('Error', 'Check date!');
      return ;
    }
    this.planProvider.addPlan(this.planNo, this.courseNo, this.title, this.image, this.checkedSpotList, this.startDt.length > 10 ? this.startDt.slice(0, 10).replace('T', ' ') : this.startDt, this.endDt.length > 10 ? this.endDt.slice(0, 10).replace('T', ' ') : this.endDt)
    .subscribe(
      data => {
        console.log(data);
        this.util.showAlert('', 'Plan saved!');
        this.navCtrl.setRoot(PlanPage);
      },
      error => {

      }
    );
  }

  deletePlan() {
    this.planProvider.deletePlan(this.planNo)
    .subscribe(
      data => {
        this.util.showAlert('', 'Plan deleted!');
        this.navCtrl.setRoot(PlanPage);
      },
      error => {

      }
    );
  }

  getSpotImage() {
    this.courseProvider.getSpotImage(this.spotList[this.selectedIdx].id)
    .subscribe(
      data => {
        this.selectedSpotImage = data.json();
      },
      error => {

      }
    );
  }

  checkThisOut(checked) {
    return checked? null : 1;
  }
}
