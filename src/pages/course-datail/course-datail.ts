import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanProvider } from '../../providers/plan/plan';
import { CourseProvider } from '../../providers/course/course';
import * as _ from 'lodash';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private courseProvider: CourseProvider, private planProvider: PlanProvider) {
  }

  ionViewDidLoad() {
    this.courseNo = this.navParams.get('courseNo');
    this.image = this.navParams.get('image');
    this.title = this.navParams.get('title');
    this.planNo = this.navParams.get('planNo');

    this.getCourseDetail();
  }

  getCourseDetail() {
    this.courseProvider.getCourseDetail(this.courseNo, this.planNo, this.day)
    .map(data => data.json())
    .subscribe(
      data => {
        this.chooseNum = data.chooseNum;
        this.spotList = _.cloneDeep(data.list);
      }
    );
  }

  addCourseDetail() {
    for (var index = 0; index < this.spotList.length; index++) {
      if(this.spotList[index].checked || this.spotList[index].isMust)
        this.checkedSpotList.push(this.spotList[index]);
    }
    this.planProvider.addPlan(this.planNo, this.courseNo, this.title, this.image, this.checkedSpotList)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {

      }
    );
  }

  checkThisOut(must, checked) {
    if(must)
      return ;
    else
      return checked? null : 1;
  }
}
