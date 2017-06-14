import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CourseDatailPage } from '../course-datail/course-datail';
import { CourseProvider } from '../../providers/course/course';
import { VariableService } from '../../services/variable';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses: Array<any> = [];
  randomCourses: Array<any> = [];

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

        var tempCourse: Array<any> = _.cloneDeep(data.json());
        for(var i = 0; i < 4; i++) {
          var rnum = Math.floor(Math.random()*tempCourse.length);
          this.randomCourses.push(tempCourse[rnum]);
          tempCourse.splice(rnum, 1);
        }
      }
    );
  }

  goDetail(id, image, title) {
    this.navCtrl.push(CourseDatailPage, {"courseNo": id, "image": image, "title": title, "planNo": ''});
  }

  swipeTo(ev) {
    // console.log(ev.direction);
  }

  attrChanges(value, idx) {
    console.log(JSON.stringify(value) + idx);
  }
}
