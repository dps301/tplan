import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CourseDatailPage } from '../course-datail/course-datail';
import { CourseProvider } from '../../providers/course/course';
import { VariableService } from '../../services/variable';

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses: Array<any> = [];
  filterOn: boolean = false;
  seletedCity: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private courseProvider: CourseProvider, private variable: VariableService) {
  }

  ionViewDidLoad() {
    this.getCourse();
  }

  getCourse() {
    this.courseProvider.getCourse(this.seletedCity)
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
