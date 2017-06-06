import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseProvider {

  resource: string = '/course';

  constructor(public http: HttpService) {
  }

  getCourse(filter = null) {
    return this.http.post(this.resource)
  }

  getCourseDetail(courseNo :number, planNo :number = null, day :number = 3) {
    return this.http.get(this.resource + '/detail', {courseNo: courseNo, planNo: planNo, day: day})
  }
}
