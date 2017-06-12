import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CourseDatailPage } from '../course-datail/course-datail';
import { CourseProvider } from '../../providers/course/course';

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses: Array<any> = [];
  filterOn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private courseProvider: CourseProvider) {
  }

  ionViewDidLoad() {
    this.getCourse();
  }

  getCourse() {
    this.courseProvider.getCourse()
    .subscribe(
      data => {
        this.courses = data.json();
      }
    );
  }

  goDetail(id, image, title) {
    this.navCtrl.push(CourseDatailPage, {"courseNo": id, "image": image, "title": title, "planNo": ''});
  }
}
