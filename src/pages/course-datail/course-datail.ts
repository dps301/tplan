import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanProvider } from '../../providers/plan/plan';
import { CourseProvider } from '../../providers/course/course';

@IonicPage()
@Component({
  selector: 'page-course-datail',
  templateUrl: 'course-datail.html',
})
export class CourseDatailPage {

  courseNo: number = 0;
  planNo: number = null;
  image: string = '';
  title: string = '';
  day: number = 3;

  chooseNum: number = 0;
  spotList: Array<any> = [];
  checkedSpotList: Array<any> = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private courseProvider: CourseProvider, private planProvider: PlanProvider) {
  }

  ionViewDidLoad() {
    this.courseNo = this.navParams.get('courseNo');
    this.image = this.navParams.get('image');
    this.title = this.navParams.get('title');

    this.getCourseDetail();
  }

  getCourseDetail() {
    this.courseProvider.getCourseDetail(this.courseNo, this.planNo, this.day)
    .map(data => data.json())
    .subscribe(
      data => {
        this.chooseNum = data.chooseNum;
        this.spotList = data.list;
      }
    );
  }

  addCourseDetail() {
    for (var index = 0; index < this.spotList.length; index++) {
      if(this.spotList[index].isMust || this.spotList[index].checked)
        this.checkedSpotList.push({id: this.spotList[index].id})
    }
    this.planProvider.addPlan(this.planNo? this.planNo : '', this.courseNo, this.title, this.image, this.checkedSpotList)
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
      return !checked;
  }
}
